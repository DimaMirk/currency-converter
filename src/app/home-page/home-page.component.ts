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
	сurrencyValueObj = {}

	inputValue: any = {}

	valOneInt = ''
	valTwoInt = ''

	resultValInpTwo = '223'

	ngOnInit(): void {
		this.curentCurrency?.subscribe(data => {
			this.currencyArr = data
			this.createObjWithCurrencyValue()
		})
	}

	createObjWithCurrencyValue() {
		this.currencyArr.map(({ ccy, buy }) => {
			const c = ccy
			const v = buy
			this.сurrencyValueObj[c] = v
		})
	}
	getInpValue = (event: Event) => {
		const value = (event.target as HTMLInputElement).value
		const key = (event.target as HTMLInputElement).id
		this.inputValue[key] = value
	}

	onClick() {
		console.log(this.сurrencyValueObj)
		console.log(this.inputValue)
		console.log(this.inputValue)
		console.log(this.valTwoInt)
		const r = 3 * 4

		this.resultValInpTwo = r.toString()
	}
}
