import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }
  iconDelete = {
    icon: 'hammer'
  }
  amigos = [
    {
      name: "Manoel",
      idade: "18",
      nivelAmizade: "1"
    },
    {
      name: "Manoel2",
      idade: "21",
      nivelAmizade: "3"
    },
    {
      name: "Manoel3",
      idade: "32",
      nivelAmizade: "2"

    }

  ]

  ngOnInit() {
    console.log(this.amigos);
  }
  async subirMenu(nome: string) {
    console.log("teste");
    const actionSheet = await this.actionSheetController.create({
      header: 'Deletar',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deletar(nome);
        }
      }, {
        text: 'Editar',
        icon: 'construct',
        handler: () => {
          console.log('Editar');
        }
      }, {
        text: 'Cancelar',
        icon: 'close-circle',
        handler: () => {
          console.log('Cancelar');
        }

      }]
    });
    await actionSheet.present();
  }
  deletar(nome: string) {
    this.amigos.forEach(amigo => {
      let aux = 0;
      if (amigo.name == nome) {
        this.amigos.splice(aux, 1);
      }
      aux += 1;
    })
  }

}
