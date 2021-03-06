import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amtInput', {static:false}) amtInputRef : ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  ingredient: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    const inputName = this.nameInputRef.nativeElement.value;
    const inputAmt = this.amtInputRef.nativeElement.value;
    const newIngredient = new Ingredient(inputName, inputAmt );
    this.shoppingListService.addIngredient(newIngredient);
  }

}
