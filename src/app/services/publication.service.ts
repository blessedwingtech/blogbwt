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
            title : 'Système d\'exploitation',
            content : `Introduction
Un système d’exploitation (OS) est un ensemble de programmes qui gère les ressources matérielles et logicielles d’un ordinateur. Il sert d’intermédiaire entre l’utilisateur et le matériel informatique, facilitant l’exécution des applications et la gestion des périphériques.

Les principaux systèmes d’exploitation
1. Microsoft Windows
Windows est le système d’exploitation le plus répandu dans le monde des ordinateurs personnels. Développé par Microsoft, il est connu pour son interface utilisateur graphique conviviale. Les versions les plus récentes incluent Windows 10 et Windows 11. Windows est largement utilisé dans les environnements domestiques et professionnels en raison de sa compatibilité avec une vaste gamme de logiciels et de matériels[1][1].

2. macOS
macOS est le système d’exploitation développé par Apple pour ses ordinateurs Mac. Il est apprécié pour son design élégant, sa stabilité et son intégration étroite avec d’autres produits Apple comme l’iPhone et l’iPad. Les versions récentes incluent macOS Monterey et macOS Ventura. macOS est basé sur un noyau Unix, ce qui lui confère une grande robustesse et sécurité2.

3. Linux
Linux est un système d’exploitation open source basé sur le noyau Linux. Il est utilisé dans une variété de dispositifs, des serveurs aux smartphones. Les distributions Linux populaires incluent Ubuntu, Fedora, Debian et CentOS. Linux est apprécié pour sa flexibilité, sa sécurité et sa communauté active de développeurs. Il est souvent utilisé dans les environnements serveurs et par les développeurs3.

4. Unix
Unix est un système d’exploitation multi-utilisateur et multitâche, principalement utilisé dans les environnements serveurs et les stations de travail. Il a servi de base à de nombreux autres systèmes d’exploitation, y compris Linux et macOS. Les variantes d’Unix incluent AIX (IBM), HP-UX (Hewlett-Packard) et Solaris (Oracle)4.

5. Android
Android est un système d’exploitation mobile développé par Google, basé sur le noyau Linux. Il est principalement utilisé dans les smartphones et les tablettes. Android est le système d’exploitation mobile le plus utilisé au monde, grâce à sa flexibilité et à la vaste gamme d’applications disponibles sur le Google Play Store5.

6. iOS
iOS est le système d’exploitation mobile développé par Apple pour ses appareils iPhone et iPad. Il est connu pour sa sécurité, sa fluidité et son intégration avec l’écosystème Apple. iOS offre une expérience utilisateur cohérente et est régulièrement mis à jour pour inclure de nouvelles fonctionnalités et améliorations de sécurité.

Conclusion
Chaque système d’exploitation a ses propres avantages et inconvénients, et le choix d’un OS dépend souvent des besoins spécifiques de l’utilisateur. Que ce soit pour un usage personnel, professionnel, ou pour le développement, il existe un système d’exploitation adapté à chaque situation.`,
            author : 'Ing Bentz',
            publishedAt : new Date()
        },
        {
            imageUrl : 'https://th.bing.com/th/id/OIP.EqNo_Xwatr-16VSx7iOlcQAAAA?rs=1&pid=ImgDetMain',
            id : 2,
            title : 'Intelligence Artificielle ',
            content : `L’intelligence artificielle (IA) est un domaine fascinant de l’informatique qui vise à créer des machines capables de simuler l’intelligence humaine. Voici un aperçu détaillé :

Qu’est-ce que l’intelligence artificielle ?
L’IA se réfère à la capacité des machines à effectuer des tâches qui nécessitent normalement une intelligence humaine, comme la reconnaissance vocale, la prise de décision, et la reconnaissance de motifs1. Elle englobe une variété de techniques et de technologies, y compris l’apprentissage automatique (machine learning), les réseaux neuronaux, et le traitement du langage naturel.

Types d’intelligence artificielle
IA faible (ou étroite) : Conçue pour accomplir une tâche spécifique, comme les assistants vocaux (Siri, Alexa) ou les systèmes de recommandation (Netflix, Amazon). Elle est très performante dans son domaine, mais ne peut pas effectuer de tâches en dehors de celui-ci2.
IA forte (ou générale) : Hypothétique à ce jour, elle serait capable de comprendre, apprendre et appliquer des connaissances de manière générale, comme un être humain. L’IA forte pourrait théoriquement effectuer n’importe quelle tâche intellectuelle qu’un humain peut accomplir2.
Superintelligence : Un concept futuriste où l’IA surpasserait l’intelligence humaine dans tous les domaines. Cela soulève des questions éthiques et de sécurité importantes3.
Applications de l’IA
L’IA est utilisée dans de nombreux domaines :

Santé : Diagnostic médical, analyse d’images médicales, et développement de médicaments.
Finance : Détection de fraudes, trading algorithmique, et gestion de portefeuilles.
Transport : Véhicules autonomes, optimisation des itinéraires, et gestion du trafic.
Service client : Chatbots, assistants virtuels, et analyse de sentiment.
Divertissement : Recommandations personnalisées, création de contenu, et jeux vidéo4.
Défis et considérations éthiques
L’IA pose également des défis importants :

Biais et discrimination : Les algorithmes peuvent reproduire ou amplifier les biais présents dans les données d’entraînement.
Sécurité et confidentialité : La collecte et l’utilisation des données personnelles soulèvent des préoccupations en matière de confidentialité.
Impact sur l’emploi : L’automatisation pourrait remplacer certains emplois, nécessitant une adaptation des compétences et des politiques de travail5.
Conclusion
L’intelligence artificielle a le potentiel de transformer de nombreux aspects de notre vie quotidienne et de notre société. Cependant, il est crucial de développer et d’utiliser ces technologies de manière éthique et responsable pour maximiser leurs bénéfices tout en minimisant les risques.`,
            author : 'Ing Blessed',
            publishedAt : new Date()
        },
        {
            imageUrl : 'https://i.blogs.es/b45de5/2/1024_2000.jpg',
            id: 3,
            title : 'Innovations Technologiques',
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