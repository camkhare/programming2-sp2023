let miniSquares = document.querySelectorAll("#mini-square");
for(i of miniSquares) {
    i.addEventListener('click', function(e) {

       if (e.target.childElementCount != 0) {
    var clubName = e.target.childNodes[0].textContent;
  } else {
    var clubName = e.target.parentElement.parentElement.childNodes[1].textContent;
  }
      

      let i = 0;

        while (i < information.length) {
        if (clubName === information[i]["What's the name of your club?"])  {
            localStorage.setItem("ClubName", information[i]["What's the name of your club?"]);
            localStorage.setItem("ClubHeads", information[i]["Who are the club heads?"]);
            localStorage.setItem("ClubTimes", information[i]["What day and time do you regularly meet?"]);
            localStorage.setItem("ClubDescription", information[i]["Describe your club. What exactly do you do in it? Do you have food? Any fun facts or reasons to join? What do you do in your meetings?"]);
        }
        i++;
    }
    }, false);  
}




// Finish doing local Storage for all array ideas
// change Pride names to acc names
// Changes photos to match with acc names








var information = [
 {
   "Timestamp": "5/26/2023 10:20:23",
   "What's the name of your club?": "Secrets Of Success",
   "Who are the club heads?": "Skye Harris & Ellie Alden ",
   "What day and time do you regularly meet?": "Once a month. Live zoom interviews. ",
   "Describe your club. What exactly do you do in it? Do you have food? Any fun facts or reasons to join? What do you do in your meetings?": "Inspirational and entertaining live interviews for the Francis W. Parker High School, with a host of people at the top of their fields.",
   "Logo of your Club": "https://drive.google.com/open?id=1WU3oui9eGHQGCIXiOLqrnj7iUuRMNZp6"
 },
 {
   "Timestamp": "5/26/2023 10:31:14",
   "What's the name of your club?": "Investment Club",
   "Who are the club heads?": "Massimo Franco, Kyle Fielter, Calan Scherer, Benjamin Kagan",
   "What day and time do you regularly meet?": "Fridays during lunch ",
   "Describe your club. What exactly do you do in it? Do you have food? Any fun facts or reasons to join? What do you do in your meetings?": "Francis Parker’s Investment Club is not only a place where people with interests for the markets come together to discuss and debate about different stocks, trends in markets, and the overall economy, it is a community where we prioritize  building on everyone’s knowledge, learning as a community, and introduce the market to people who want to be more involved. ",
   "Logo of your Club": "https://drive.google.com/open?id=17GMWLQrysh-ACk-Ur3Co9-rB92tjYxx8saJIb_MBXsk"
 },
 {
   "Timestamp": "5/26/2023 10:35:19",
   "What's the name of your club?": "Chess Club",
   "Who are the club heads?": "Massimo Franco, Shalen, Jasper ",
   "What day and time do you regularly meet?": "Every Monday after school ",
   "Describe your club. What exactly do you do in it? Do you have food? Any fun facts or reasons to join? What do you do in your meetings?": "Parker’s High School Chess Club is a welcoming community for students passionate about chess. It provides a platform for players of all skill levels to improve their game, engage in friendly matches, and participate in inter-school tournaments. Through regular meetings, members develop critical thinking, concentration, and strategic planning skills. The club fosters a sense of camaraderie and offers a social space for like-minded students to connect and create lasting friendships. It is an intellectually stimulating and rewarding environment that embraces the complexities of chess.",
   "Logo of your Club": "https://drive.google.com/open?id=1KIJL683PylPW_fGoVcP58vfb6ypE0XXWrFEnrviuZ4c"
 },
 {
   "Timestamp": "5/26/2023 10:37:17",
   "What's the name of your club?": "Chess Club",
   "Who are the club heads?": "Shalen Chawla, Jasper Chazen, Massimo Franco",
   "What day and time do you regularly meet?": "Mondays from 3:30-4:15",
   "Describe your club. What exactly do you do in it? Do you have food? Any fun facts or reasons to join? What do you do in your meetings?": "We play chess, sometimes we have food. You should join because it is a very fun and casual way to either learn or get better at chess. ",
   "Logo of your Club": "https://drive.google.com/open?id=1H0sNaFdx61ee43-xmLmPi_BeclHJhkHg"
 },
 {
   "Timestamp": "5/26/2023 13:25:13",
   "What's the name of your club?": "Sports Debate Club",
   "Who are the club heads?": "Milan Shah and Mikhail Satchu ",
   "What day and time do you regularly meet?": "Mondays during lunch in Dr Popes room",
   "Describe your club. What exactly do you do in it? Do you have food? Any fun facts or reasons to join? What do you do in your meetings?": "We always have munchkins. We debate sports sometimes. Dr Pope plays old rap songs and Mikhail talks about yeet",
   "Logo of your Club": "https://drive.google.com/open?id=1MfaehYH8G8HpvPv7rE7jfEmJPNNWIBO6"
 },
 {
   "Timestamp": "5/26/2023 17:36:06",
   "What's the name of your club?": "Let’s Take Action",
   "Who are the club heads?": "Hanna Bilgin ",
   "What day and time do you regularly meet?": "Thursdays during Lunch ",
   "Describe your club. What exactly do you do in it? Do you have food? Any fun facts or reasons to join? What do you do in your meetings?": "Let’s Take Action (LTA) is a Parker club dedicated to teaching students about their rights in Parker’s Student Government and as citizens. Recently, LTA’s has introduced its Citizen Education Program, a curriculum specifically designed to teach underfunded communities their rights as citizens, broadening the goal of this club nationwide. The goal of the program is to reach multiple schools and non-profit organizations across Chicago, explaining the process of the US Government and their essential roles in our democracy.",
   "Logo of your Club": "https://drive.google.com/open?id=1i3lvIofBab9ekhLiHv7zBiRg_Vk18M4r"
 },
 {
   "Timestamp": "5/26/2023 22:14:04",
   "What's the name of your club?": "SASA",
   "Who are the club heads?": "Riya Jain and Anika Gehani",
   "What day and time do you regularly meet?": "Tuesday Lunches",
   "Describe your club. What exactly do you do in it? Do you have food? Any fun facts or reasons to join? What do you do in your meetings?": "SASA is an affinity group for those from South Asia.   We discuss challenges of being South Asian at Parker and in general.  However, we also celebrate our culture and have fun discussing what we love about where we're from. ",
   "Logo of your Club": "https://drive.google.com/open?id=16PkZegx9SPWoeTYpNzt_NAppFbdf6xeV"
 },
 {
   "Timestamp": "5/27/2023 17:36:27",
   "What's the name of your club?": "Math Club",
   "Who are the club heads?": "Kumiko Muro",
   "What day and time do you regularly meet?": "Tuesdays during Webster 2",
   "Describe your club. What exactly do you do in it? Do you have food? Any fun facts or reasons to join? What do you do in your meetings?": "Math club tackles challenging— but not impossible— problems in a casual, non-competitive way. We aim to promote creative problem-solving strategies, not discourage them. Furthermore, members are encouraged to bring their interests to the table, whether through the form of an interesting math video or a problem set. All are encouraged to join regardless of math level or grade. ",
   "Logo of your Club": "https://drive.google.com/open?id=1aRH6atPPuofsrZqzGvbyq97nhH71deg2"
 },
 {
   "Timestamp": "5/29/2023 15:01:48",
   "What's the name of your club?": "The Parker Weekly",
   "Who are the club heads?": "Benjamin Kagan, Harry Lowitz and Hanna Bilgin are the Editors-in-Chief",
   "What day and time do you regularly meet?": "N/A",
   "Describe your club. What exactly do you do in it? Do you have food? Any fun facts or reasons to join? What do you do in your meetings?": "The Parker Weekly is Parker’s flagship student newspaper and one of the oldest of its kind in the country. We publish about 11 issues every year, and members can contribute in a variety of ways. The Weekly is always looking to engage more contributors and improve our coverage.",
   "Logo of your Club": "https://drive.google.com/open?id=1Jw4kK4AXbRzqhsPbxG5xQiGOeUNv5KEW"
 },
 {
   "Timestamp": "5/30/2023 13:35:16",
   "What's the name of your club?": "Ping Pong Club",
   "Who are the club heads?": "Teo, Jasper, Teddy",
   "What day and time do you regularly meet?": "Tuesday, 12:30 to 1:00 PM",
   "Describe your club. What exactly do you do in it? Do you have food? Any fun facts or reasons to join? What do you do in your meetings?": "we play ping pong.",
   "Logo of your Club": "https://drive.google.com/open?id=1-npFThNw3AhckhHP4O1h7cV8NeaPgbvw"
 }
];



