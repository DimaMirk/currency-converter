import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ApiService } from '../services/api.service'

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	constructor(private service: ApiService) {}

	@Input() curentCurrency: Observable<any> | undefined

	currencyArr = []
	сurrencyObj = {}

	ngOnInit(): void {
		this.curentCurrency?.subscribe(data => {
			this.currencyArr = data
		})
	}

	onClick() {
		this.currencyArr.map(({ ccy, buy }) => {
			this.сurrencyObj
			const c = ccy
			const v = buy
			this.сurrencyObj[c] = v
		})
	}
}
