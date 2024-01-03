import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductComponent } from "./product.component";


@NgModule({
    imports: [
        ProductRoutingModule,
    ],
    declarations: [ProductComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule {}