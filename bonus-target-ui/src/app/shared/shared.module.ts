import { GetNamePipe } from './pipes/get-name.pipe';
import { NgModule } from "@angular/core";
import { LoadingAnimationComponent } from "./ui/loading-animation/loading-animation.component";

@NgModule({
    declarations: [
        LoadingAnimationComponent,
        GetNamePipe
    ],
    exports: [
        LoadingAnimationComponent,
        GetNamePipe
    ]
})

export class SharedModule { }