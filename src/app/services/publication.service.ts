import { Injectable } from "@angular/core";
import { Publication } from "../models/publication-model";


@Injectable({
    providedIn: 'root'
})

export class PublicationService{
    publications: Publication[] = [ 
        {
            imageUrl: 'https://th.bing.com/th/id/OIP.rj0AyMzZIJDUaRobfrwVkwHaHa?pid=ImgDet&w=191&h=191&c=7',
            id: 1,
            title: 'Télévisions Transparentes',
            content: `LG a dévoilé un téléviseur OLED transparent de 77 pouces, offrant une expérience visuelle unique en se fondant dans le décor lorsqu’il est éteint.`,
            author: 'Copilot',
            publishedAt: new Date()
        },
        {
            imageUrl: 'https://th.bing.com/th/id/OIP.uAkrSVxNrEscoNSzW9zjVAHaHa?pid=ImgDet&w=191&h=191&c=7',
            id: 2,
            title: 'Poussette Intelligente',
            content: `La start-up canadienne Glüxkind a présenté “Ella”, une poussette connectée et intelligente, qui pourrait révolutionner la vie des parents.`,
            author: 'Copilot',
            publishedAt: new Date()
        },
        {
            imageUrl: 'https://prefurredpetsmvp.com/wp-content/uploads/photo-gallery/MegLakePhoto_-24.jpg',
            id: 3,
            title: 'Appareil de Télémédecine',
            content: `Withings a lancé BeamO, un appareil 4-en-1 (thermomètre, électrocardiogramme, stéthoscope, oxymètre) destiné à améliorer les téléconsultations médicales.`,
            author: 'Copilot',
            publishedAt: new Date()
        },
        {
            imageUrl: 'https://blog.secur-cloud.fr/wp-content/uploads/2023/02/informatique-quantique-scaled.jpeg',
            id: 4,
            title: 'Internet Quantique Sécurisé',
            content: `Cette technologie promet de révolutionner la sécurité des communications en utilisant les principes de la mécanique quantique pour créer des réseaux de communication inviolables.`,
            author: 'Copilot',
            publishedAt: new Date()
        },
        {
            imageUrl: 'https://geneticliteracyproject.org/wp-content/uploads/2016/07/Screen-Shot-2016-07-18-at-7.43.41-AM.png',
            id: 5,
            title: 'Médecine Hyper-Personnalisée',
            content: `Grâce à l'intelligence artificielle et aux données génomiques, les traitements médicaux peuvent être adaptés spécifiquement à chaque individu, améliorant ainsi l'efficacité des soins.`,
            author: 'Copilot',
            publishedAt: new Date()
        },
        {
            imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0ARADASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAABAUDBgACBwEI/8QAShAAAgEDAgQDBQUFBgIGCwAAAQIDAAQREiEFEzFBIlFhBhQycYEjQpGhsRVScsHwJDNigpLRNOE1U3OissJDRWN1g4WTo7Pi8f/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAQIFAAb/xAA3EQABBAEDAQYCBwgDAAAAAAABAAIDESEEEjFBBRMiUWFxMqEUgZGxweHwBiMkMzRC0fEVcoL/2gAMAwEAAhEDEQA/AKO0oK7HeoMk9TUIYCsMoFE3WhbaU6synY0bGzMpJPSlJk9aa2Q12kj9cB/yosIDnIUry1tWtTKmTuOteGVB3pQ8rBmGT1rUzP51O+kPbYTgzL51gkGpNx8Q/Wk3NbzreOZi8e/3lqwkFqCw0mN+5LJv2OKX6zRF4STHv2NCZqsnxFWbdKVXYHI60bLe3V0IllZdMSiNFRQqqAANgPPvS4N0omGMsOZI2iEHBbGSxH3UHc/p39SxPeAWNOChyMYac4ccKWOOWRtMaM5AyQvYeZJ2oyBZo0uNcTMrQvHmIwyAairZbTqONu2/8wHusry4hoiByRnLMR95z3P5Dt67QMHJAlWLYnW2oYwM/dGd6I0sB2jKA9rnNJOAt41tzJGYZTFIIHkZlOG5yhjgiYgZ6bDPoCdqmlnuZVi98ghulaEzK4LQzCNSQcPgKTt6/U7AIvOSQ3KuF6+PDt9Ds9eCaNCcc6FijR42lTDZBGl8MB9as2Z0YLWux5fkcLjDuINX+vPBUht7CUjk3EkDsBpivVwpJ6aZU2/ECoZrDiEPieFjGekkeJIz/mTIoq2k1zQBlimXRHB9mwDAK4YMY5gW/DH8jYeIraJJae6u1vKxi8KkxkqRh8ocg7/4vpv4e2xyDxtr1H6r7CuL5I+Dfvn8/kqc0bqAa0UsTVp4jEAo51tFOCZV1xHkSnlDLHUMp0+f+6a2toZJVCs6FsMEuBpODuCHAwfyoUmnAIDDaJFqNw8QpBmKQKWwcVJZO3vMI9T+lPbuyMVuWKbY+LqDt5jakVp/xUX8R/ShlhY4Wilwc00jZiea38VHxHwLv2pfN/ev/EaYQ/ClF80qtyjHpmvI43Z1QAlidgKOiQNjpU1mqR30BboSRvUgYUEqzcL9k4ZbZZrl5NbjwqpwB9Kr/GOGS8NuJIzkrkFT5g7iunWTK1pBpG2gVW/bGFWghl07gYz/AAtn+dCDiXIxYA2wufFa0IxnepmHWoWGxqXKRwh2zk7159axq1qFKHAIG+2WY/ia3TPj+VaamIXPbUB8s1tEc8z5Vx5UtPVAFsUO0uCRXpJNDuPEaQpPA2VvzDVm4RhuGSE+U386qwRjuKsHC2kSxlUfuyf97NNae9+ErqQNuSk7FdbfOtiqVBKCJH/irXU2KA4m0QMsCkRoLFVUZYnYDcmpYoo0IaR8FWGEQZLMO2roPWi1s5oouUMo5UNeSjGoZUPyVPUAZ8Xrt2qAoY1GF05JCj91R1J9aguKMyKhlbyzTNp+ziBHw6juP1raKO5fUz+6BB1LqWIPYAqB+taRwSO1sp2e5LPv1itkOCxHmaJMfPuIVG0UcYdEGNCq2QuoeZ/lXFxOSiBgqgp4oYUUSyw2surJSGLWjsOmZN/h8h1Pp3Eu45pnDqhjAUARgnlqAekYwMD0qw8O4bFM+SQAMAsEyzY36nerXHwaxkgMborKwwGIAdW8wRVnamhtHCsNIXeIrkzBo2Ktsfwp1wW2sp5FDy4d/CFbGkn02/nU/tLwReFlJPGVmdhHIMaHIGcEdjQfA3RJldmxoIbtvRI3i75SE0RBrgrofBPZ7g1xZcRM9rCzM8sWohS2kR6gcncb1ylpJVypbUASAHAYYHzrsvsxcWstrxYcxdTTDRgjIIgwPTfp9K5LOkMrvHOnu1zlsNpIic5+8vUfMZHp3p10feDczCQieWyFsmUHC0DTQ61ZPtFy0R6DPXS+R+dWljJJPZKjl1EbnTJpK4zthWqtzWF5apDPMoCSM3KKkMHVMeIEbY323p9wqXnOjbnRHp7/AOxocbHxu2vFFMyOY9u5hsLzisix6RpeNgGUGF9vEuk5R8jf51nCk1sviikX+zgq45baYcgDBypz33qDizZlx2z/ADpjwiBmGERmYYJVB077k7Uw23voC0u9rNucIjiCRxW5wzwto6jwqWaXGO6kY+X+9dhgPvMb6EkGqTDxkRswEnKB2yhycU+4wLmKDK8xQVOpVIOkD/rFFV2zmAuITIi7tnVETGTjfcL4fyq8oLXAOx7oUZ3NJYbRFxCOc+GKnWfDMug7HBwR4aKVJEVSykDsT0PyPSpDJGzSHUGXX0mXBIDM3xLkdSeorcfZRqY1ZR4VYqQyHCjrgkdfMVDoxyhNlddEIu23UVOV0XFux7MrflkVrasJTbukfikfluiDALAZJA7Ajf6UxawncRFsAoMEnO+5x2pqLSueMJXU6+ODDzRV64S6vZRY8qE9pIhLwyU/u5x9Rn+VRcBeSGAwuc6B1Hr060fxELNZXa52EWs59MVmywuikorQ02th1MVsK5Q9QsOtESrhnwNgSPzqA96q/lNN4QjDr86jINStWnQg+tUVghugGPNs/PNbxdZP4a12w3rI5/Otoer+qGu6q1ADCUgbnNQSDDZ+VHEKScVo0YJ38qB3ZRRIh1cAVZOFG2/Z8vMOHZZMZ8xnApDHEhkQN8JO9Wu1t4BGAFGnH0q0M5ifwsztLUNjaMKoz/3sm22okVNwyBbniFlERlRKJHH7yx+PTv54x9aZ8Xt4EUsAAQcDzNR+znLW+lkfrDa3MyZ7sAqj9TQLtxWjophOwOCsl7BHHbISFM1zOFwOmuUtJufUjeldzBC1wF6oJrS3GnGWL5YgD5YJ+dS33EUeezRT4Y5opDvndYD/ADJoGebnPaxBsHnCR8beOVwgxjfOB/WasTa1FFezxRT3cyffYwQD923iHh/HYn51vZywLDZGQjMyK5zjOmPMKg/gT9aT8QlaS4lIVljBVY1IwVRVCgEeeKntY0uLixikd441twNSkLggOw3bbrUxxOleGN5KC+QRgvPAXQrKewgt2mlmhjiVQXklcLjyBP6CnFtxvgciKY7mRtyAUtbll2x5oBVAPCXmeCL3yURqwCsyLKuojdiUI+VE2FrwnmQWzXc0jy3S27FVlONbqmFZf1p//iZITc4+YSUvazXioSrVx289nr7hctvdSTJDd6ks55Ld0X3qMZVkdyB4TgN2wcd6qnDfYv2qkRiYrWFnEfLWa6iy6uMhw0RYYq2+0vs7DxleGrBN7s3Do3hhQoWhMRIIXAYEEY6+tTW1veWVnbQyy5NtapaqyZ08tF0D170IQBrsLnzl7QXKqW3sX7StzOVxCzRTgPypbopIPPIQbeuKbx+w/G5eX77JaTRoAZFcShWI++raS4z3xTj2dv5LiyFzcMs5aficjIsYCrFa69EWBgaRjc4/Sq7b3XEYZEuo7ktOWEjPzcszHxHOog49K1tPG6K2t/yFjTPMjicCj7H7SEu4z7M+2i6kXh0ktjAzi3SxlinVY+gwikSdv3aC4MkkDvFPG8UyDxRzoY5B/lkwavqe03GrZI+bDbSJIvMjeWPS/XBBEbAbHbpQV3xq+4mkkd2ttICMw6YFR4HHRopE8foQSQQfwVkjlMpdIbKbifG6EBgoKuWFtHecZTmxJLBBHNcSJJ8LY8Kjr5kVaF4fBbXtzDbRuscUYmiVPEIrmUKBGA3c7nPkKXezluplv7ttRaS5js4QNs6ALhyc9gMValiZryQL96USzsOryOin9NI+nrVmSfR2OlHJwpfF9ILIXDF2kHtHHLBJaLCkTyyWyPOolRpThyPBGxGdvI1UZbS3mC3lsrIC7l4yVJUDIJwOnn+PlTD2tne44hcvECUjkS3iIOw0eEDPqcmmth7McXlmlWfkc02gedsn7QscKfmceL1XPemtPqu9b3WoyK5Kz9VCNM50kXnwPuVbA1rK5CglmDBQAAwG+ANvWvIy6qp7DGfIjyNTNy4JLyLJIV2Iz18J0nNeJ4kUDv09PWlJWljtqYhIczcjuHze7yHBOAUdPmDkZ+YJBq0C5jkj6jpSWP2d48zyabZQsNss5zIM8vfAHmxwSa3toWjUyzPpQBCF+LdsYzjvvRoXPedrOiS1UEJFyDlXfgcavHuB4lzufEcHrimF3aMYZ0X76MM+e3Sq37N8RbnPAAvhmlTCHOofdyeuauRkJ+LSPQsN6V1Dy2Q5tE0mijEA2iiuO3cbCW5OFAE8qKGYKSQdwoPltml8gYbMCPLNWPjdo3vU+EJdHTAVdZfWSSNvCd8759DSQmM5UbdiFPf+CSizQAEEdUxp9QXtz0wlrdTUZot4kJIGN+y+Fv8AS2351G1s3SN0c9lbMcnlsr7fgTS3cuPGU0JmdTSAzkY/dZx+ea3h+Jv4TXvJeMMJFZWLOcMpB2PrUY2J8sdqEbDqKY/tsIBetbNW0UZYmvZF0mqjhVPKgc4AI61c+CQpNwV53La0jnI+a6sVSmyc4q8cAyOAT/8AZXX6NXQN/e36JXWRtfGAfNUu7mlklkDsSASBmssJHjuAAccyKSM742IzUcytzZdvvGtY35csb9lbxfI7Gly2nG1owU1oATBkYOWJJIOfIbDFEcOllXiFmVcq2qYqVwGV/d5QrAnfI7Vo668aSSXAZQoJZvkBvRHDLO8m4jZRxQtzVcSkTERfZ6GyRzME7ZOMdvSjbWtR7c5V+5Z2muSzMzFgzMxJJJOcknevVbKg9TgZqW8tpEubhB4wGSMyIsmjVt3dQfTpWiQTLhds4z3pcvAJyr924iqXivIu6synb4SR+lPOBKWuuGHBOniNuc6C2BzU7hgRSCUSxMFbGDuCAd6fcFXPJlOXENwsvhijcjS6ttlgac0ztx5Wfrh3cdldac+M5/r8ahuWPu9yfKMf+NRQsl+mrYdQCNsbHeoprwPb3IA3MMpHqVXUB+VMPwV0BBYFD7KK1xwaHQippfjELlVySr85M/Wqat62mP8Asd0o0oSQomXOP8JDVefY+IW/DUScIwW8uXZUbOYZpOap7b4Jqt3FrdwXc9gyQ3EsDyJhwI5TGCSj6tjgjBzk09BunF1mvJZ8laZ7rwCb5P8ApRLcObETuobl3DRrGFlEml1B+Bhn1+tQpxGPJzBONsbxyefrGRUkk/DVFvCjMpUO0xVwwaUkDKHqQBt0rwyoBJy2ZgsbMM4B8IJPUj9avqKDsUp0xLmEm8nFqzcEiEXDuFscD3h7lkUdWeaUsT9FXH1p5HIbSHi15N0R5Js9iDGI0C/UAUr4bbNr9n7dg2bfh3MJJOA7YOcfWnd40fK0OpaMspli28fLOvAzt2BHyrJjPesLByCtTUXA9j+hC5zxC04hFbe8TWcghaWMtJqDFC7eEsgOw33yPw79LsQxv5sDOOG2w9AeY9VrjR08CuVWaENfXNtCrTSJCdIkEz5DnrgDpmrHaSD3+ZUAIHD4CW6anLt09B/OrMdJKPGOFna/uIPDGbLq+21ym9jD3t3jOnXNnA/w5rZE0QjcHUQobsVBBJH5CnEvAeNNJdTcgBG1FcumcbKNs1onBOMCAL7tq1LnGVOCTnPXqO1PTOaXkpGBjhEG10XSrPU8k4P3uGIPx1jeudTTaEWFT8QySMbIOnTuetdE4ewL3AKnw2Eat0zkatv1rmcCyzSosa5aSTlxD7oYdPoBuflS8MhjD2jqmZYhI9jvK8eqb+z00dvdmJCeY4WSZh1UZIEaf+Y9/pXQPu6sAdO2SfxqkLGlokCx4ADMdRHjdwuC5Pr1P0FXCyMnuVo0p1SGNc9TvjqSe9IukEhwtRukdpx4jyqdxaKaHi0+IW5TnmYHwsXwMhWOx8+31FVa/t1jnk0t4ZMyprDDwsc4yatPtisou7SQO4DxkNpZsA/DnakwB4jZfa6WuYAViYHDMEAJjfHdt8GtdhbPCIwDYWE5rtPOZOh8vkkRjlUbM/Qn4daHzwBn9KiEzDAYZHcf/q2RTFzGfg+EqxHUYz1H06UPcjMZ7kNGAdvL1rn6am7mlWZqQ521wQXPMiPFrxHrkAVsgK33WAJIHkcedDJ9/wCQxUhilQuHjdRrdGbG2T0yelaIpGvr0pOUOsbgtCMtHw8IaGTQSD16V5JqfLYOPOmcvs/7SCR2HCbnBOwQwt/4XomHgnHBb/acJvA/j2MYJPXyNLAJiuqrBcL2q8ez7g8Bn/7O5/RqrEvs57TJpZ+EX+HGpdMWvbyOgnB9KtXA+H8Xj4TLbHh96JjHP9m8LKxyGxjVirQOIeh6lvgwqVKy82Ud9RqEIZXVFxljgZzj8t6Nn4RxxZptXCuJDxnObO42/wC7UcdlxOOQM1jfLp33tpx0/wAtBe6yUzG2gE7tZrewRovjjgjUXDEYeefGox564z4R5Y9TS+DiExvI51fRL70SroTqDqA2zeQ6D0+dbpDNhbmeGeOILI/jjaLSxyHZS43PZcdN6XwDW9uFGMXDSkjICjbCgeWKVecZWi0mxSsd0z3AMrKmo7nQAgz16LtQQt1chsdgP1pubSXlAMNIcgDbswyKXiKa3meKVSvUjPQgb5FKBPnKGkshICCoYeRFMeF8GHLYoh+NseCGTHw9OYwP4VvCUUjVjTn5irTwtIXiyun4iRnknfb/AKyndG4h6y+042mA2qbdL7RWU5itLmQRLg6HjjMaDGThW1AD61Pb8Z4wp/tLWhRFLFzDp+HzKECrdPZCRpFMSMrgBgQmCPLC7Uq9ooU4ZwpFjhjDcQka2YhVAREUSHGB1OwH1ohkc6Wl0cTG6YOPkl/DOO3EJn5DWiW6xmSTXI4VBnZE1Dr10gntTm19qOE3boLl+HtOoRIjLa85wdzpaZlAI7dPlVHkAThtkTwx2DyzuZA8yiQ50rkJvsOlCRyIu44aQQRjJuzv+OK3dzYdraGf+3VeedG7UAkk4wOOi6LxP2y4bZKsE3D4btH1Lo90tki8OMgrIoP5VX14xZcVf3bh3BrXhyXEsUczwvNLNIC+QgJyqpncgDfAycDBVcXNze2tncLYtEIwbeVsEkyDBBJO+/QfKvPZa3uJeNcKi5bBVuOdIWUgBYVL9ceeKR1Vwy+H4eU7pHGaMbueOR+C6vZzK/GLqFVwsFtDEuw3AG5o++gWVTGHKNIoCkAHxZ/Q96SW82PaGQLsDBGG9TVklXUyNgfDjf0PasyOV0bt7Tlbk0TJAGPGFQPakwR3XDre5dTyIYZ0BKqwd3IOEYHrgDrVy4TAW4jOrsdI4dFLkbbmRhjfeqB7WytLx66HORRbCygCsWBPh1HSFB89/nXQ+Esf2pc7nbhMHUbAc1q2DrJJIqoD8V5mbQxNlySar6lzC447x5GkiF/cYLsSCVOBvgdPxo2DiPHpI5Wj4hMBH4RkJjoBjpSKeNhNcatOeY58Lq3U+ak0dbXDQJcIPvEnffBzVqCXDsCvJdX4YjrG5JLNJw8M7HGckGqTwS0ZY5LuTAeeR4IDqUlYE8UjbHbUcD5A+dXi2caXceEfsten3c6unyqqcPsLW0PFIIRNyZZ+ach8LIyDWUOMYPXas/UuIwOq2dBGHne7gfevZM6J7hyNKKjKvbSzhVUfqat1g3NtbcqcjQq+owN81RuLSvbWPJLgtNOurA2KxENnPzx+FWzgU3Ms1IPQY9CCKpG2mWjaqS5ttpb7XvLHbWcsGkBJHVsqCSMDqTVXtk5kd7NbhYpXSM6M4CyKeZkeSt2+tXT2jgjm4cNZbw3Eapp7MwIDHNUThzMJOKRk5D2RZjnYFMjVk/P862dE40AeDj2Xntc0BziORR9wh7kIJmKjCSq0yAdAsgDgDPln8qEuMFOoHji8TdB08h2oxwrW1pJtkWiY3HQSOnQfSgrjHKf+OPp8t60JP5ZKz4v5leqgZrsW8w51u8Usjs2kqGOGAyAQD2oNerfI/rRZngMLxo5A5jDQEdBjIOfjK5+lCKRljn7prP1GSDd4WlEasVWV1Z4Cc+Y3B9D50IxdCVOxFPWhxo+ek+oIoC/t/s2kUeJOvqtZVLbKX8xlDYPXqM9cb16JWx8R/E0KZB51qJRgV1LkwS4kLoHdyDhd2O3lvTBVk6h3G2RhjtSESA96sFmwmgV/TBqQuVG9t7u5SQRSOZGuIUEOsk+7wgFCEHTLEE0q9n+Fm+tXdY2B96NvGx31lApZvLG/5V77YzyXXGbmFWbm2Trbxx6WZmJUaEjCjOSSMbd6vHCrOLgnBrK0YKLiC2HOxv8A2iQmR9/Qkj6UjMclaOnBwguLxwxLAqYyvJT/AEjGa9n4dDeW0bFRzEUAN332xS28mmZhqGUZlCn1BzVn4fhrUdMlcCk+StDgKnycGulJEROQeh70VYzScOXTcOYXLtoXXb4cAjJAm7Vao4dUhAA+LC57k+tUaTiicR4lxSaKVVtopPdbXNxDCGiiONY5iN8RyfrWjoGbpMrE7akLNMS3lGS+1PDre4kE1ymFxsFZm+nLXT+BpXxjj9jxsQ28MkqW9oXl5jrpMszrpyq4JCqPXufKqvxo6r6chtQON9av/wB5AB+VRWWyyj0P6Vd7QyckITZXyaVrSeQE7ScT2U1v+05l91Ilt1VG8SH+8B04OF69aCQyahp4tnLqftPel7+gIoWGeS2mhlTTqjdXAYAjI8wacoto3Lvrq1hELsknKEbJMzlu2kgaDuQSPStmFx1bRmi33497WY9o0xOLB9ufLj61NxeS7h4XbkXkZjluWbQrEsQiDBGoZxnJpx7Ln9nWS3l0+u64iolAbGYLJSdJHqx3PoBXvDeEWHGLmS/vVHuVmpFrZ/dkKb+PHVF2GB1P5q5+dNMzLcpIdTKgHg0AH4FGBjHlQNVJvk8JsAV1R9DD3cVuGTnhWTg1579xUSlkJAWNmU4Y6CcNpNXmaeKGNmkcLHGpkkdjgKqjJJJrnnB7JdSsR9qmHIzpkU576aecW0Nwq+a9llZAIwqggs8mrEaYOM79RSLdLbsLTfq9rfF0VL4iZL2/urwSwYuLhrhdT/d5mkKc98V1ThBH7TuiB/6oh2/+K9cvgT7C31RdXOSYYt8Z7lsn6/8A96dwcH9q3XX/AKIiH/3WpybTtiZgLGZqXTvNnivvXJZFCzSjmI/qhJHfzAr0tjWfkfxGaGvPs7lgsiuM4JUMP/EBU+rManrlQD9DirON4SrBTQuvwsUhkcY5Y4Ug/wAxcAfrW/DCWtR4snffPkxoXXpsZCc5bh0UYAycnIboO+351nB54kt7jLAxxOCCu+RIoYAevX+hSUvx2fJaUbLgxzaWe1kLXMEkRkChbeMrnbD83Vt6nFb+yUjrbNA75dMA/MbUl9pbuWXiOTnTHbwLHGp8IdwSAT5+dTex8yrNOgfVqdup8X1/lTRp0QpZkMUkGodvN2b9sfkrbxdS/Db4adRROcmT0ePcGuW8MScNxabmH/hBCHGcl2ILbg9utddu4leC5iLhddu4YtuNwe1cugSJkv4bdfCJfd4i6klnyDJIfp+Qprs4biQ7oq9quDBxzQ+aWXA0JYxmZQy2uSGYAguzPuOvegrkSNHhJF3ePYMDn1wDRd5b2k07zfbaJMcoBBnlp4FO798VBOtrEkWgyaxn41CjAGfuk0eSa7YgxCqcOfZCTyGK0WLmsJATrU83fDE5/dpakkxJ8X3TTSS3luUmmy2lS+wZgDgajtSuMKGI9DWfqC4kXhaunLC0jr1X0K7ppTVjIKflQl5LByJ+2Y3/AEoGe9XUgDDGWb8NhSm/v9UbRqTlttuwpbAWhSXNMMmo+d61A2o0Xb2zCBLoWjX0zTMkFsW5VuqRjxTXEh20g7Ad/WoGSr0si95lBMUM8i4JBjjdl26kEDFWDh1/BYWVzJeB1MeHEePGc4XGk77naoUbiEANzxeSxtiwCwWkcsUcaLjA5k05BOOuFGKxWhuA3Ke2nUqQRE0U64PXPLJq4AQytLu04W/FH4pJYxLfqsaLNlnA5a8tWCE6dQG2cdqycu/xAlSdyu+/yqSRXkKYbThQpQqCpwMfe3/OowpUHIJUYLY6rj7w/nUPhY/kIjJXs+EoW7tUdUKspQadgNwx756+nSmfDNSfZuO2B9BQ5j1EbYbrkdx1BBP6VNFJLEwc6XHfUMEfIgUk7RkZanGau8OCOkwqTlc5Ecvw5yToY4Arm/ArG/to5VaG5iLEBQztb6j6ao2rob3JeCYQx/2honCcwnlCQg6dTLvjz2qKPMOptTBS2SdTkg7Z6DpT2giLXEuWD2/KHafwnC5Zx/hl/FdtNNFIqSkaXZjICfLVpH6UttYWXmDz2rr3EpYLu1vrS9txKqqTzIE+1SL98IdyRsdt651Jw+K0l0uZnjkGuCWMao5oz0dCBj571MsNy2FTTTEaZu4dF7YcNa3jXiE9vDPFqaOKOWRFUtjBZy2wA7VNaNxCS7Aheyaa5JhMUCGWSRGGCpZVzsO+rat5obZbCzCx30jrJKJEQYHMYjbcEZ8tqtHBOHQcKhgaWFouIcQUlkLCV4YhltJfGAAPi9TitdzzAGsj459/l+KTiH0jc+TzI/Vn8EvmlXgt/wAMsxOeTBCqzFVzzXuCS4JAx4cjHypm3BrC5uE4hHGSeUeYisyJIwIAdgvfzpfx+K6exiuo0iMYuGMz7aw2klTt+dNYefBY8KkRm5nJiZgD1JG+RQJAxkgNXasO+1GlcxjiHDANg/ci7azt4WYpHgPpLDmO2MDouTsK2uuHWvEBGt3Cswj+BWaTSudicAjep43BMAK4ebL4HQKuMmiwo2x20/8AKjOkg6D5Lxv0PtpxO5zh/wCvzSQez/BwNrCDsfvnffzarJwvw8WuwABjhEI8h/eGhiECkgZwD/tU3CiTxi8OBn9kp09JiKU1L2OZTQtzsfRa2GQv1DiRjrapUns1bSSGQhmLYORqHn2zQN1wyO2VkSNySfBjJLZwCAPwq5kSgLpZcaR1GNsUrEUpvJ555I+RDGzRIowzTaSAMntjP1x5VQAXlbYbbQAnUVxFyXV8aYoItIz1KgLkH571XYFnt5wgnkDOxLeIDUXOVOc98+X61pc8SihlhhQkZR7lI1BAeJFVskZ65zj603ukiKi40oIxEhY6sYyCxGT+VSWgs9QnC4xu9FWuNaGu3LyYSJEiB83K5Zs/jUfs/NDHfqY2+ziPMc7YPYD8f0ou5NnNaPI+iSSTJwN8HOwHfaoOHWAijkcZxOVYHQdS4GN9PUUzBGxzg1+As/UyPDXFmSuiveQzxSSxMH8GDpI66ehrm9yPcbS4jjkR5bgSeOIEiOOQjVlvM/zouy4bxImd3aVYHkZghZwr5Y50oD5frS6+tmlmdYomEUUYjjwMhiCCcY7eVFjjbp2uc05OEjNI/UvaHjAyV7HbZii1ONlQKCMYAGcdaivzYwRQh4tZJbVsD1XY7mnUVmwiiyh+BCcj/DQd7YpM0StsNTn57d6v3RcMDKRi7S7qXPCUwXXCltbsPMsZke4Mcehy2GjAGyKRufWqugBl2O2D+lWm54VBon0HJUSNkjG2nOPyqtJCRJSWsilYWiRtLb0EkTi97CTa6NI7Ca4j1DwSMhAycaSRivBG7HePJ779KYPBbLO8g+Jjr379j+OPzoiNYW8Q07he/mNqzsLcylsdmrHxIMn57bVYbaNoLCKOBVEgRjGWGoByxIY/I70KBGP3c/0aYqy+7wBCMacfUE5q4pcLtV5uCcLDPc3ae/3jktLcX/2pLfuxo3gAHoNqgksOEBsiygVsZDQxJGynt4kwR+P0pxctgkZ2HT0+lKLudo5FihhaaRRqkdn0W8TYyIxjxMw+90Aq9KSiIxdoBy5WniyBybw5cD/2U/X/AFZ+YoqKWK4DaQyuhCujjTJGfJ1P5dQfOlcM8ww07RITuEQMSo6gnUxPyouZJJk50BjS7iA5ExUAOMj7OXuVP5dfnKojlVQCuAF29cfKvWTbI2zjofLvUNlci5Ro7iIwXce0sTfEuejKRsVPYiiQMD0zvkDtXLlpGFPbJ3J2IohQGjkA6jBXGvqD301FgZHbUd8+vkM1PBuD0IzjYMc7/wCGjQ4KyO1s6chJ7kSIRNEDqhIZcas6OjxnO/qKDFpbSSmFVHud8WuICBvbXGMsE7AHuKbsCl3JGR4WI2xgfgTQksQ4aqK74jubzTCSMtCChYgZ+83QVWXLrTWiFwNvyRMNvbWcJEzRa8mS3V12MirjHmc0khuzI3EJ9TyXkze6x6FwUWQhSqKc4wPShLu54jfcSjiLwxImpShkHgQA4TJ7jqT50TYNz50fMgkgCBWlQIHYbHSo8J9Gzn8a0IIzKy39FnTPj00lRUb59PU9fmprrQvu9sUfILR3SFsiVm0jSQcDYU4WJH5KBcKgUADpsMACgzau16DICpjLFw4OonyOe9GicxnCjJG2SfyFJSvLjS0YWCNm4G0WlkDMZixL6dIHZVA6Cp+VgZDdEhJ+bZqGCdysB2y8tyhPosQYVPCxZUJ6FLTP1JqQ01ZWNPqj3lN6LwRjQ31H51Lw0BeNXwG2OG6dz2Fw1YQNGOyq7D/6mK14e6Djd+SwGeHPgn0uCaDL8Kd00veOvhJXIAB1nSFXJbt23xQU7RIQVkVk0NzcEEhg2wGdsntXvGLqP9mym2jILckGR+qqHByMfKkd1dW7yW1kwBebM0oU4CqsLMMlcbnrUE5WjAym2VPm3uLoPGmq5kZIw5AYRYOkGMdNJO7eozVjvxHb2UduwB5wSHcBvsUwTkH8AfU0h4dCIbpZ41LogUoHYELjGMnr0z+Oatpm4JOqGcxmQKAeYpIB8gwppjwCCVm64yhjmxhJ4bTh6xrsWyWYkaQcE7DHp86bQJw1I11tGmA2zMvhAGzV7q4IoKq0ABIOF1Mcj0ND3ScNuk5eI1iJy2yrr/i6belGe+MrF041z3VgD1tAcR49wd8Qw3MeFbSCrKNQAwTnPegI+JcN8Y50Rwu51DbfzzRo4J7PEseTASepwDmsk4JwRY5NFtCDoJJwMgCgb7W41ha3aKREtzBy0dpoIUMaENNLGmQVB6E0kvOMcAhMeviEEhGvIhDSEbDG42qrycDneacmC6kQSME1EhdOcDoM/nU0fBJEIzBFHgjqpZvnls0y2aWvCKWA/s3TNeXzSEn0of5+5FXHtHwzRKLe1upgwddZVUQZBGe5qqteoG1BSKtUvCWEEmrUSqSnfYbKT0qmPG2rBIGKQ1r5bG4rc7KZpad3I+a7dyQcHK/IfjWuhQcEjAYAZwNz0FLEupsE74ye3brXnvswJ2GG2ORnfoKSW/YTfTGMdOpqdJBy0Tbwg7DuC1IDxE7bHJx0I8qL4fde8STRk4YRmSMkjoGAP03qWnKlFXO2+OuO2/50qnEasjNFJMSsot7WPZrh0UMdZHRMkA+ecU3mBcBQM5AA+dVv2iubm05Flbg/tC7hEfh2eKCRz4FI+9JtnyA9djnCqo4bxBJdCV4ZLi2huLy9eFR7rZqMKsMAOzOWKgsc98UZZvKttFxO8BY3MyrZwux0KoHhkkJ3JJ6bbeVR/sY2nA+JWiKvMm9zjml2Bncy8yVlzvoXZV+VN7u3jlbglvnEELtdMi6RqWPCoqj6f1moFqSFIct7uJZD71oEq7ANGG3wyjsfKjVAYbgE4G4/XegkLu9zMwAaZ2IVe0aeFADWssi21vNcNnRBGz4BwZGA6A/rU2qUjDtkYB2xsM1NCDggdyCNmPX5UmtuIXRis5rhCVvIEkVQNLGd8sIrcHrhd3PQD82ocwxxNjJfDsqqX8PQjJIFHg8TljdsHZpiStX5aO07KCw1EEgAIo2LH1qt+0t6VhsnCrLGTzph5rISowe2wqPjl48S3Fu5ZYGZZ7Z0xpc53jJU42OaWpKl7Y3krsdSwBDnoG3wBnzqkvxkdU7oTemYfQIawnjYypAmVnkCSmVFc8sdF1E5yT1+VWi0hjih5SqUDElo2+0TOewO9IuA2h5bM3xZR1658sGrXBHpBbSdvCv9HtRmaiQNA8lD9NGST5olomENvIAqM2YWYyai7AZ1DO/ShzGysykDUoVmA7BuhPz7VpJLywdWl2Zm5SZPluzkDYVFYJLEsrSTcx5XkeVyNPMkJBLsOwAAVB2Aqsjtx3KkERY3aSjI5XVY1BA0PKw23y6hTR1uxIXcnCoP9NAnkk5B0nbvsfXFGwmNQPGNWCwU7Ej0zVC81S7uGNO4hEOQFf8Ahb/ekHEHlivo5VbRGLNhK2cA5c4Ud96cSzYidgBq5bMqscdAT4j2qnXtzLPPK82DzY0OVyFBQY0jJwNsGocx1WQq6bV6edzmROsjlSzyST5CSIqEINKtknA8sEgdzSPiFu8F3aXoljKuTE7ZwGbTp6AZwQdtu1NjFpflzK6LJGkTDURyyQCHGDnJ/SoLW2kFwLWYlUiLSylMBWjXxCQBgScUUxg8hH7yuDhNYI+RCikksyICQMbAAdWx+lbjxHAC9Ccsc7fTaoml5js+nGSuAN9K58PXy+Vbqy4OoEHI2ztRQ0BKPkJW+B3ffyRQP0rAFzsmfIuaxSN8MB0+fn86zOrHUnfr+NWpL7l7k/vAfwj+deDVmbr/AHL+fcj6V6GIxgqP4dzWjEHOWG6k9/n2rrpWbZTteWkUbOVUaEJLkAdPWlHFOIWKtEoV5ZArECJcA5IAyxr1La4lCyFG5eP7y5blxgDyL9foDQV6OHRzQCWWWZhHIRHbfZxeHfxSN4j+AqA/ZkYWe/Ssktr3F3oP1/hQcSPFGvLrh1s0EfLAEriPmyaGVdTAE+vlXtrw+yht4YjDG5VSGeSIBnbO7MCM0C/GL0ys0Gi2MzoJXgB50mcDxzNlz2702iYtHGSSSRuSck70tJJv62tXQ6YQggMDR9p+v/ZRSw7Eenl5DFQtHjJ9dQ27nB/3pgFAycdz26j4qgZAQdu2Dt6FRSRWwEveIdP8u4+lS2BMF5byZwH1RsdvhZSu/wBcf0KlZR1xv2yBnOAT/X+1aFV2OOhx22AOR/X+9QOVZOuZokUtqwW2ZwF1N1OBQi8Ntm4nNxOctLMzZj1biMnbw/LtS953kBdYZZbpSyMzyaILfbBJJPXbsKiTjy2xEd0uqNcgTRHLAjzB6/SjrlZJFjdHjO6uhU56dS2ajJbMDbBo4gg26HcAEfnQcHEbedA9vNFMDuRG41qO+tT4h+FSe8ISN/T1zUripdgBGgJAQLgD/EBv6n9TSHiV3JNHxyOMgrbi34THv4WvLmQGTBP7oAX8fOnTTPHDK8QUzRgtDnoJTlVJ+Wc0EthHDacOtkGpV4pZ3ErtjLviRyzfM1y4IOd5LWW9Vm1SWNnw7hdv4siNDavczFM7ZbAz8qbzS80RhVDcpI3VhGjqUYaTgyMF+dVnjl3yOJ8TDZ5ZvLKWXT1KT2DWxI+tMeD3QuIoVwMQxJCWKxFcdM6pW28+hpnSV3i8/wDtEa0ZPsl17dwtNPYTLqVpWMOeVo8WSV+y2z0xWnCoDHBxJAhYSghFZQ2kjbDA1DfQM/Fp4+ql+xRgR1B8AAyO1WC1tipAA3dSH64zp3IPrUSfzSSm9Cf4RleQU3DbchFCggsATjAA8+goq/uIbXRGWXLIcKPjODjIHWjbWNYgAvdWz9QarvGWlfifLSRAFtosK6K2+Gc5yKHklMF4aD6LeSWeWR0KAeIjGcAnYZPUmiAhXlkNnMau2BgZxvuTml3vMsM8LSGDSxR2xIEOljvkNkD8qJluuHlo0kmIKllw6lEI2xhxqXP4VakITXW3KMEoYRCEAs6gF2+BWDEbnqT6VreSe6xpzgX1pciQ6ciOKJGkZyBtncAfOse4t2XZAwVFlXAWQEsoOC0ZYevSl0s8dx79HLcxc+64Y76NegxnVoWFUYjyBNQaUtL3VjCA/bXGHhteHRwKzT8OjuOf9prVSpJicnw5x36/rQtk0090bKXwNJFzcMMh2BBCYB6ee9G8Wga1suCyR6TLBBKZ3DgBkjaNxpxnPcdO9ZKqkWdxgCW0mtri3kAwZLSU6iqt6jfFMPaW7XWSltLBDFvETA2+aRlw0klxdo2AVdADglWwfP8AU0Jf3/uLJGQJJpUTmAsXIi3KqNsfP5imcqAXl7MVyhkDAHc4cahjFVXi7FrzXgkl03bB3A6YHhx/tUyPskhCcdgDFerThiThdUpT+x+9kKBsRvj5VVY+P2BweVOBllY6QQPUkGrzw8gagdscHby8vTauRcmTlXBwAoJUgsgI1kYIDb5+QpUyv3+iMA2h5q4w8U4e6htZGRnSVPpntii/erDf+0x7+RKrnr3x+lV+ySF7OPDOJSMsqhTo9NWc/pW4gtwTqZC3fxBz+Pw/rT2ALSFvJNDCfq8DoWjliIyQATufQVLyp40SXHK0rqUuVXUw6aFbxH+vrXg0SbqyqexDZb/V/wAq8My6ixnLMdyS7En5knNCc5vRGaJL4wnkjzytqlkeRv3nJP4ZpTxI6JISSVJVkU/PqKDN6UJxckf5s1hvLSbSbmfUUBCg74z8qVdXUrSYdopopZerZ2/ErmCJxyYpkWIhtQICqc6vxp1bNmCE9ipIPmMneqfcz2vPnw+U14QnuABR8HtDHDFFE0aMI1CAhiCQOlCBA6ozS7qFetS4PqPXoARURwTnHfVuMncjt/X5VsMK4IOcMRv0Iyc/r/WK8dwxLDbIOep6ChJqlCQRgY7BRsMb5H9f86jOTnyIHl0Az/X/ACqU+udj69SfP+vyrQhemD91enbcd6hcgLkKk4kkMMccselnlXUAVOcBR12I7UHPHYSSpc3KP7nGpFpA+Bc8QkH/AKRkGyxL1J79Bncg3iCF4OaqIzwsJV5oLKBgDJAO+O4+f1UcZlWBI7OMl7y4hjkvrhiTIIMbIu3VzufQAUQHC5I57m4kuHlgZo8N4PdsoWPRUTTvgnApvDxviNvMtneabmSNhC8qHTJzc4IyPCd9ulQWdutvEOIupAtkNzCCNuacxWykHzOp/knrQ/B4hccUtC5JSN5bucnJJS3UzHPzIA+tVyCuVuhvJnRmjRnVcBxjxKfXFEHiUDLpJ0nKnxDBDKdQ2qPhgUR3G25EJYepBOTRQtbW5OmRIiSepBBx6Eb0xSpvpV7jSJdu90u+YBb3ePuqGzHKB/hJ3qT2aUrHcagoZWUa8WygHJ3DyEkZ+VFXHCULuiSSRkdNR1AjPbvR3CuGzwc+RpUZpCp1gRRnOT3YEj6CmdK2n2V5/t938Ga80IIudxKeQMCdekjXqOw+IEKNqfoghGB8Whiw+YoWCzeK6uZZJAzMxKaXZiB5lnA/Sj17nOTpbcfLriomy80m+z/6Vl+SkiJw2AQRpbOQc74qU2Njegtcwqz6yusEpJpONtaYOKiUFRv0x8/I0u4pccYhktl4eFKtEzS6xtr1YGN/KhbT50iSNYATVrS59lEJZ7S+dCc+C6USA+mtMH8jSi84Jx1JWf3ZZFyPFbusgxgDVpOHz57U0Q+1rAHmWYBz1D5H5mtuT7VMf+KtEPnoYn6d6kV7oYlcBdUqnKFglDytIs6qoCBGhPhwB8ek141+6ggFiAhEYctIx3zpDNuB8q6DaQ3Pu/K4i0Ny5zqLxgp/pbNBzez/AAy4LFbKGPPUwa4MfMxsBVrPAwrGdkbdz/maVSsRNxK2mhuNTSx5kVZCA5t2XDhE+LYgHGO/pR/DbVUgvOGSnmPbtbxpq8Ja3my8OQMt3x26Ua3szw62bnC4uwynUFglI6b41kZ/OnfBrezj4jMI4FVhw8StJjXOxV9I1ud8CusNGUEawyn90wkdTVD55P1Kvlw74GNKMsa4yNlGkHBqrcXnxdDOQpD4LYI1Lsowdvyq3i1WIs0twrdSEthrY77HW2FH51TOPXMQu40gtkiYE5lZ3knbOOrscfLAFS4gNygRP75+Gk+vA/NdOsGOP/lDHJGC2R5f8q5DNIH1/FIxbcuSF29M6j9TXW+GnOSe/BznPXcVyE6FLb9zSr3Emgn44gMrRzxAoESZljH3F8K/gNqgZr5SAZ5Mn/EaJMuAds0HM8mrVpOMUB98kp1lHAC8eS6XGZpD/mNSQ85yCZHJIPVjQxcuQT2oiCUBgMdjvQwbKIW4WpjfU+Xbqe5rzQdvEfxNb6pHZsLkajU6w6sEirhhdwqF1coZl8KZ33b9ajwM1NMxj8IXIDNv5ZrQR8wa8/OqluaCsDiyuzmKP16AdflWcqPbY7tjr23rKyiq615UeBt51qYo8Hw9v51lZVguUU0EJinUrsUYEeY0mqRGi3N7xF5ssxumjz5IhEagfIVlZUnooHKN9p/s04ZBH4YnSaV1UAAurcpSfkAAPT57h8BRCeNNjcWMUYPkstzGrY+YFZWVB+IKVbLRQIro7/cXfyC0RGAJYwNhtWVlMIKnu1XY43AP5UXw1Awdckeq4DbEd8ZrKyjw8lYXbn9MsnjQTsd9307nO3XvXgVQScdiN++x64rKyqP+JPaL+mZ7KdUUIXGdQOBUMyhpbcHowYHHoaysoPVMy/AtVZg7IGIVTjY7kepr0ltZUMwHod/x61lZRis53CMCJFFrUZbY5clvyO1DO8j/ABOx9M7fgNqysrpccLL7KHeyvMmSPPKjZRpf5GiuDAftW56/9FH/APNWVlJv+FenZwP11VeVBrmGT8J71RuLxobzJznesrKNWEjGSb+tdQ4YAQ3/ALn/APLXKhFF109zWVlczkox6L0RR/uig7tFyB29Kysq8gG1TGTuQwhi8j+NbxRR6xseh71lZShATIJRUcaKDgdzUoArKymWjCCeUDcdWHm7CshUBQPWsrKW/uRz8K//2Q==',
            id: 6,
            title: 'Robots Habiles',
            content: `Des robots capables de manipuler des objets avec une dextérité humaine, ouvrant la voie à de nouvelles applications dans la fabrication et les services.`,
            author: 'Copilot',
            publishedAt: new Date()
        },
        {
            imageUrl: 'https://www.universetoday.com/wp-content/uploads/2010/10/carbon_capture1.png',
            id: 7,
            title: 'Capture de Carbone',
            content: `Des technologies qui capturent le dioxyde de carbone de l'atmosphère pour le transformer en biocarburant, contribuant ainsi à la lutte contre le changement climatique.`,
            author: 'Copilot',
            publishedAt: new Date()
        },
        {
            imageUrl: 'https://www.mapatisserie.net/wp-content/uploads/2022/01/boulettes-de-viande-sans-viande.jpg',
            id: 8,
            title: 'Viande Sans Viande',
            content: `Des alternatives à la viande traditionnelle, fabriquées à partir de protéines végétales ou cultivées en laboratoire, offrant des options alimentaires plus durables.`,
            author: 'Copilot',
            publishedAt: new Date()
        },
        {
            imageUrl: 'https://th.bing.com/th/id/OIP.72cktuehSngJboCjBkOXewHaE8?rs=1&pid=ImgDetMain',
            id : 9,
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
            author : 'IA',
            publishedAt : new Date()
        },
        {
            imageUrl : 'https://th.bing.com/th/id/OIP.EqNo_Xwatr-16VSx7iOlcQAAAA?rs=1&pid=ImgDetMain',
            id : 10,
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
            author : 'IA',
            publishedAt : new Date()
        },
    ];
    
 


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