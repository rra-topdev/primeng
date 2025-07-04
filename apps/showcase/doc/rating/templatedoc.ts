import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'template-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>Templating allows customizing the content where the icon instance is available as the implicit variable.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-rating [(ngModel)]="value">
                <ng-template #onicon>
                    <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon-active.png" height="24" width="24" />
                </ng-template>
                <ng-template #officon>
                    <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon.png" height="24" width="24" />
                </ng-template>
            </p-rating>
        </div>
        <app-code [code]="code" selector="rating-template-demo"></app-code>
    `
})
export class TemplateDoc {
    value!: number;

    code: Code = {
        basic: `<p-rating [(ngModel)]="value">
    <ng-template #onicon>
        <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon-active.png" height="24" width="24" />
    </ng-template>
    <ng-template #officon>
        <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon.png" height="24" width="24" />
    </ng-template>
</p-rating>`,

        html: `<div class="card flex justify-center">
    <p-rating [(ngModel)]="value">
        <ng-template #onicon>
            <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon-active.png" height="24"  width="24" />
        </ng-template>
        <ng-template #officon>
            <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon.png" height="24" width="24" />
        </ng-template>
    </p-rating>
</div>`,

        typescript: `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
    selector: 'rating-template-demo',
    templateUrl: './rating-template-demo.html',
    standalone: true,
    imports: [FormsModule, Rating]
})
export class RatingTemplateDemo {
    value!: number;
}`
    };
}
