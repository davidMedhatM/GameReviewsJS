import { Ui } from "./ui.module.js";
import { Games } from "./games.module.js";
export class Details {
   constructor(id) {
      this.ui = new Ui();

         document.getElementById("btnClose").addEventListener("click", _ => {
         document.querySelector(".games").classList.remove("d-none");
         document.querySelector(".details").classList.add("d-none");
      });

      this.getDetails(id);
   }


   async getDetails(idGames) {
      const loading = document.querySelector(".loading");
      loading.classList.remove("d-none");

      const options = {
         method: "GET",
         headers: {
           'x-rapidapi-key': '4781e9a70fmshb248ffb2a216fabp17b356jsn9c531c2026e7',
		    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
         },
      };
      try {
         const detailData = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options)
         const finalDetailData = await detailData.json();
         this.ui.displayDetails(finalDetailData)
         console.log(finalDetailData); 
      } catch (error) {
         // alert(error)
         // this.Games = new Games()
         // this.Games.getGames("mmorpg")
         document.querySelector(".games").classList.remove("d-none");
         document.querySelector(".details").classList.add("d-none");
      }finally{
         loading.classList.add("d-none");
      }
   }
}
