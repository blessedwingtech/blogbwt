import { Injectable } from "@angular/core";
import { Publication } from "../models/publication-model";


@Injectable({
    providedIn: 'root'
})

export class PublicationService{
    publications: Publication[] = [
        {
            imageUrl: 'https://th.bing.com/th/id/OIP.72cktuehSngJboCjBkOXewHaE8?rs=1&pid=ImgDetMain',
            id : 1,
            title : 'Operating System',
            content : 'Read more...',
            author : 'Ing Blessed',
            publishedAt : new Date()
        },
        {
            imageUrl : 'https://th.bing.com/th/id/OIP.EqNo_Xwatr-16VSx7iOlcQAAAA?rs=1&pid=ImgDetMain',
            id : 2,
            title : 'Artificial Intelligence',
            content : 'Read more...',
            author : 'Ing Blessed',
            publishedAt : new Date()
        },
        {
            imageUrl : 'https://i.blogs.es/b45de5/2/1024_2000.jpg',
            id: 3,
            title : 'Nouvelle recentes',
            content : `Récemment, le CES 2024 à Las Vegas a présenté plusieurs innovations technologiques impressionnantes. Voici quelques-unes des plus marquantes :

Télévisions transparentes : LG a dévoilé un téléviseur OLED transparent de 77 pouces, offrant une expérience visuelle unique en se fondant dans le décor lorsqu’il est éteint1.
Poussette intelligente : La start-up canadienne Glüxkind a présenté “Ella”, une poussette connectée et intelligente, qui pourrait révolutionner la vie des parents1.
Appareil de télémédecine : Withings a lancé BeamO, un appareil 4-en-1 (thermomètre, électrocardiogramme, stéthoscope, oxymètre) destiné à améliorer les téléconsultations médicales1.
Ces innovations montrent à quel point la technologie continue de progresser rapidement et d’influencer divers aspects de notre vie quotidienne.`,
            author : 'Copilot',
            publishedAt : new Date()
        }
    ]


    getAllPublications(): Publication[]{
        return this.publications
    }

    //to add new publication
    addPublication(formValue: {imageUrl: string, title: string, content:string, author:string, publishedAt: Date}){
        const publish: Publication = {
          ...formValue,
          publishedAt: new Date(), 
          id: this.publications[this.publications.length - 1].id + 1
        }
        this.publications.push(publish)
    }
}