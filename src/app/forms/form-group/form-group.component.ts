import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import {fadeInAnimation} from "../../core/route-animation/route.animation";

@Component({
    selector: 'ms-form-group',
    templateUrl:'./form-group-component.html',
    styleUrls: ['./form-group-component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        "[@fadeInAnimation]": 'true'
    },
    animations: [ fadeInAnimation ]
})
export class FormGroupComponent  implements OnInit{

    constructor(private pageTitleService: PageTitleService) {}

    ngOnInit() {
      this.pageTitleService.setTitle("Form Group");
    }
}



