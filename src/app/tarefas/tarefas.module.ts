import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar/editar-tarefas.component';





@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefasComponent,
  ],
  providers: [TarefaService]
})
export class TarefasModule { }
