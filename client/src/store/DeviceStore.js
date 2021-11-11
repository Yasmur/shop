import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor(){
       this._types = [
           {id: 1, name: 'Холодильники'},
           {id: 1, name: 'Ноутбуки'}
       ]
       this._brands = [
        {id: 1, name: 'Samsung'},
        {id: 1, name: 'Asus'}
    ]
    this._devices = [
        {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://content1.rozetka.com.ua/goods/images/big/173869349.jpg"},
        {id: 2, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://content1.rozetka.com.ua/goods/images/big/173869349.jpg"},
        {id: 3, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://content1.rozetka.com.ua/goods/images/big/173869349.jpg"},
        {id: 4, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://content1.rozetka.com.ua/goods/images/big/173869349.jpg"}
       
    ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }

    setBrands(brands){
        this._brands = brands
    }

    setDevices(devices){
        this._devices = devices
    }

    get types(){
     return  this.types
    }

    get brands(){
        return this.brands
    }

    get devices(){
        return this.devices 
    }
}