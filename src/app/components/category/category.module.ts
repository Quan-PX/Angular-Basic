import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CategoryRoutingModule } from "./category-routing.module";
import { CategoryComponent } from "./category.component";


@NgModule({
    imports: [
        CategoryRoutingModule,
    ],
    declarations: [CategoryComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoryModule {}