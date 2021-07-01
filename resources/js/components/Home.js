

// function Home() {
//     return (
//         <div>
            
//         </div>
//     );
// }

// export default Home;

import React, { Component } from 'react';
import './css/Home.css'
import baner1 from './slike/baner2.jpg'
import njegos1 from './slike/njegos1.jpg'
import vuk from './slike/vuk.jpg'
import dositej from './slike/dositej.jpg'
import tesla from './slike/tesla.jpg'
import mesa from './slike/mesa.jpg'
import sava from './slike/sava.jpg'
import {Modal,Button,CardColumns,Card} from 'react-bootstrap'





// export default class Home extends Component {

//     constructor() {
//         super();
//         this.state = {
//           show: false
//         };
//         this.showModal = this.showModal.bind(this);
//         this.hideModal = this.hideModal.bind(this);

//       }
    
//       showModal = () => {
//         this.setState({ show: true });
//       };
    
//       hideModal = () => {
//         this.setState({ show: false });
//       };
    
//     render(){
//         return (
//             <div id="jumbo">
//                 <div className="jumbotron" style={{backgroundImage:`url(${baner1})`,height:'cover'}}>
//             </div>
//             <div className="row">
//                 <div className="col">
//                     <img src={njegos1}/>
//                     <p>Petar II Petrovic Njegos</p>
//                 </div>
//                 <div className="col">
//                     <img src={vuk}/>
//                     <p>Vuk Stefanovic Karadzic</p>
//                 </div>
//                 <div className="col">
//                     <img src={dositej}/>
//                     <p>Dositej Obradovic</p>
//                 </div>
//                 <div className="col">
//                     <img src={tesla}/>
//                     <p>Nikola Tesla</p>
//                 </div>
//                 <div className="col">
//                     <img src={mesa}/>
//                     <p>Mesa Selimovic</p>
//                 </div>
//                 <div className="col">
//                     <img src={sava}/>
//                     <p>Sveti Sava</p>
//                 </div>
//             </div>



//             {/* <div id="baner">
//             <img src={njegos1} />
//             </div> */}
//             </div>
//         );
//     }


// }



function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Petar II Petrovic Njegos
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Biografija</h4>
        <p>
        Petar II Petrović Njegoš (1/13. novembar 1813 — 19/31. oktobar 1851) bio je srpski pravoslavni vladika crnogorski i brdski i poglavar Stare Crne Gore i Brda od 1830. do 1851. godine. Jedan je od najvećih srpskih pjesnika i filozofa.

Rođen je u selu Njeguši, blizu Cetinja, kao Radoje „Rade” Tomov Petrović, a obrazovao se u nekoliko manastira u Crnoj Gori i postao je duhovni i svjetovni vođa Crne Gore nakon smrti svog strica Petra I. Pošto je uklonio sve početne unutrašnje protivnike svojoj vladavini, skoncentrisao se na ujedinjavanje crnogorskih plemena i uspostavljanje centralizovane države. Uveo je redovne poreze i niz novih zakona da zamijene one koje su njegovi prethodnici uveli mnogo prije njega. Uvođenje poreza se pokazalo vrlo nepopularnim među crnogorskim plemenima i zbog toga je tokom njegove vladavine izbilo nekoliko buna. Njegoševa vladavina je takođe obilježena stalnim političkim i vojnim sukobom sa Osmanskim carstvom i njegovim pokušajima da proširi teritoriju Crne Gore uz dobijanje bezuslovnog priznanja od Visoke porte. Zalagao se za oslobođenje i ujedinjenje svih Srba i bio je spreman da se odrekne svojih svjetovnih vlasti zarad ujedinjenja sa Srbijom.

Njegoš je poštovan kao pjesnik i filozof, a najpoznatiji je po svojoj epskoj poemi „Gorski vijenac“, koja se smatra za remek-djelo srpske i južnoslovenske književnosti. Druga njegova važna djela su „Luča mikrokozma“, „Ogledalo srpsko“ i „Lažni car Šćepan Mali“. Sahranjen je u maloj kapeli na Lovćenu, koju su srušili Austrougari u Prvom svjetskom ratu. Njegovi ostaci su premješteni u Cetinjski manastir, a potom u obnovljenu kapelu 1925. godine. Kapela je uz podršku jugoslovenske vlade 1974. zamenjena Meštrovićevim mauzolejom.

Petar II Petrović Njegoš je na nivou Mitropolije Crnogorsko-primorske kanonizovan, i uveden u red svetitelja kao Sveti Mitropolit Petar Drugi Lovćenski Tajnovidac. Na nivou Mitropolije crnogorsko-primorske, 19. maj je ustanovljen kao datum praznovanja Svetog Mitropolita Petra Drugi Lovćenskog Tajnovidca kao svetitelja.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Zatvori</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal1(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Vuk Stefanovic Karadzic
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Biografija</h4>
        <p>
        Vuk Stefanović Karadžić (Tršić, 6. novembar 1787 — Beč, 7. februar 1864) je bio srpski filolog, reformator srpskog jezika, sakupljač narodnih umotvorina i pisac prvog rečnika srpskog jezika. Vuk je najznačajnija ličnost srpske književnosti prve polovine XIX veka. Rođen u vrijeme zlo i mučno, u dane kada se činjaše da je skoro ugašen život srpskog naroda. Vuk je stao na snagu u vrijeme junačko. Stekao je i nekoliko počasnih doktorata. Imao je nekoliko braće i sestara koji su umrli. U tadašnje vreme se verovalo da je to zbog duhova i veštica. Posle smrti dosta njegove braće njegovi roditelji su mu dali ime Vuk da bi to ime oteralo duhove i veštice.

        Učestvovao je u Prvom srpskom ustanku kao pisar i činovnik u Negotinskoj krajini, a nakon sloma ustanka preselio se u Beč, 1813. godine. Tu je upoznao Jerneja Kopitara, cenzora slovenskih knjiga, na čiji je podsticaj krenuo u prikupljanje srpskih narodnih pesama, reformu ćirilice i borbu za uvođenje narodnog jezika u srpsku književnost. Vukovim reformama u srpski jezik je uveden fonetski pravopis, a srpski jezik je potisnuo slavenosrpski jezik koji je u to vreme bio jezik obrazovanih ljudi. Tako se kao najvažnije godine Vukove reforme ističu 1818, 1836, 1839, 1847. i 1852.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Zatvori</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Dositej Obradovic
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Biografija</h4>
        <p>
        Dimitrije Obradović (crkveno ime Dositej; Čakovo, 1739 ili 1742. — Beograd, 28. mart 1811) bio je srpski prosvetitelj i reformator revolucionarnog perioda nacionalnog buđenja i preporoda. Bio je osnivač i profesor Velike škole, preteče Beogradskog univerziteta. Dositej je bio prvi popečitelj prosvete u Sovjetu i autor svečane pesme „Vostani Serbije“.

        Rođen je u rumunskom delu Banata tadašnje Austrije. Školovao se za kaluđera, ali je napustio taj poziv i krenuo na putovanja po celoj Evropi, gde je primio ideje evropskog prosvetiteljstva i racionalizma. Ponesen takvim idejama radio je na prosvećivanju svog naroda, prevodio je razna dela među kojima su najpoznatije Ezopove basne, a potom je i sam pisao dela, prvenstveno programskog tipa, među kojima je najpoznatije „Život i priključenija“. Njegovi ostaci počivaju u Beogradu, na ulazu u Sabornu crkvu, iako je njegova izričita želja bila da bude sahranjen pored Hajdučke česme u beogradskom Košutnjaku.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Zatvori</Button>
      </Modal.Footer>
    </Modal>
  );
}





function MyVerticallyCenteredModal3(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Nikola Tesla
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Biografija</h4>
        <p>
        Nikola Tesla (Smiljan, 10.7.1856. - New York, 7.1.1943.) bio je naučnik i inovator svjetskog glasa. Radio je u području elektrotehnike i radiotehnike, te je izumio okretno magnetsko polje i višefazni sustav izmjeničnih struja.

        Najznačajniji Teslini pronalasci su polifazni sistem, obrtno magnetsko polje, asinhroni motor, sinhroni motor i Teslin transformator. Takođe, otkrio je jedan od načina za generisanje visokofrekventne struje, dao je značajan doprinos u prenosu i modulaciji radio-signala, a ostali su zapaženi i njegovi radovi u oblasti rendgenskih zraka.

        Njegov sistem naizmeničnih struja je omogućio znatno lakši i efikasniji prenos električne energije na daljinu. Bio je ključni čovek na izgradnji prve hidrocentrale na Nijagarinim vodopadima.

        U nekoliko je navrata nominiran za Nobelovu nagradu za fiziku, ali ju nikada nije dobio; jedan od razloga je što ju nije htio dijeliti s Edisonom, a Švedska akadmija nije željela dijeliti nagrade svakom od njih pojedinačno.

        Preminuo je u svojoj 87. godini, siromašan i zaboravljen.

        Jedini je Srbin po kome je nazvana jedna međunarodna jedinica mere, jedinica mere za gustinu magnetnog fluksa ili jačinu magnetnog polja, tesla.

        Nikola Tesla je autor više od 700 patenata, registrovanih u 25 zemalja, od čega u oblasti elektrotehnike 112
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Zatvori</Button>
      </Modal.Footer>
    </Modal>
  );
}


function MyVerticallyCenteredModal4(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Mesa Selimovic
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Biografija</h4>
        <p>
        Rođen je 26. aprila 1910. godine u Tuzli. U rodnom gradu završio je osnovnu školu i gimnaziju. Godine 1930. upisao se na studijsku grupu srpskohrvatski jezik i jugoslovenska književnost Filozofskog fakulteta u Beogradu. Diplomirao je 1934. godine, a od 1935. do 1941. godine radi kao profesor Građanske škole, a potom je 1936. godine postavljen za suplenta u Realnoj gimnaziji u Tuzli.

Prve dve godine rata živeo je u Tuzli, gde je bio uhapšen zbog saradnje sa Narodnooslobodilačkim pokretom, a u maju 1943. godine prešao je na oslobođenu teritoriju. Tada je postao član Komunističke partije Jugoslavije i član Agitprop-a za istočnu Bosnu, potom je bio politički komesar Tuzlanskog partizanskog odreda. Godine 1944. prešao je u Beograd, gde je obavljao značajne političke i kulturne funkcije. Od 1947. godine živeo je u Sarajevu i radio kao:
        </p>
        <ul>
          <li>profesor Više pedagoške škole,</li>
          <li>docent Filozofskog fakulteta,</li>
          <li>umetnički direktor „Bosna-filma“,</li>
          <li>direktor drame Narodnog pozorišta,</li>
          <li>glavni urednik IP „Svjetlost“.</li>
        </ul>
<p>
Godine 1971. je penzionisan i preselio se januara 1973. godine u Beograd. Tokom života dva puta se ženio, sa drugom suprugom je imao dve kćerke. Umro je 11. jula 1982. godine u Beogradu, gde je sahranjen u Aleji zaslužnih građana.

Bio je redovni član Srpske akademije nauka i umetnosti.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Zatvori</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal5(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sveti Sava (Rastko Nemanjic)
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Biografija</h4>
        <p>
        Sveti Sava (oko 1175—14. januar 1236) bio je srpski princ, monah, iguman manastira Studenice, književnik, diplomata i prvi arhiepiskop autokefalne Srpske pravoslavne crkve. Rođen je kao Rastko Nemanjić, najmlađi sin velikog župana Stefana Nemanje, i brat Vukana i Stefana Prvovenčanog.

Kao mladić dobio je od oca na upravu Zahumlje (1190. ili 1191). Ubrzo 1192. godine Rastko je pobegao na Svetu goru i zamonašio se u ruskom manastiru Svetog Pantelejmona, gde je dobio ime Sava. Kasnije je sa svojim ocem, koji se zamonašio i dobio ime Simeon (verovatno 25. mart 1196), podigao manastir Hilandar (1198—99), prvi i jedini srpski manastir na Svetoj gori.

U Srbiji je 1202. godine došlo do rata za vlast između sinova župana Stefana Nemanje. Posle izmirenja 1204. godine veliki župan Stefan Prvovenčani i knez Vukan pozvali su Savu da ih potpuno izmiri i on se vratio u Srbiju početkom 1208. godine. Istovremeno se bavio prosvetiteljskim radom, nastojeći približiti svojim sunarodnicima osnove verske i svetovne pouke, da bi se 1217. vratio na Svetu goru. Godine 1219. Sava I Srpski je ubedio Vaseljenskog patrijarha i nikejskog cara da odobre autokefalnost (samostalnost) srpske crkve sa statusom arhiepiskopije. Vaseljenski patrijarh Manojlo I Carigradski u Nikeji je imenovao Savu I za prvog arhiepiskopa Srbije. Sava ostao je arhiepiskop sve do 1233. godine, da bi ga tada zamenio njegov učenik Arsenije I Sremac.

Dva puta je putovao u Palestinu. Na povratku sa drugog od tih hodočašća u Svetu zemlju, smrt ga je zatekla u tadašnjoj bugarskoj prestonici Velikom Trnovu 14. januara 1236. Njegove mošti je u manastir Mileševu preneo njegov nećak, kralj Stefan Vladislav I.

Sava je ostavio više pisanih dela. Zato je bio jedan od značajnijih pisaca i pravnika iz srednjeg veka kod Srba. Njegova najznačajnija pisana dela su Žitije Svetog Simeona, Karejski tipik, Hilandarski tipik i Studenički tipik, kao i Zakonopravilo.

Obrazujući buduće službenike pravoslavne crkve stekao je velike zasluge za razvoj školstva i prosvete kod Srba u srednjem veku. U Srbiji i Republici Srpskoj se dan njegove smrti (27. januar po novom kalendaru) obeležava kao Dan prosvete.

Savin kult u narodu bio je jak. Posle jednog ustanka Srba protiv Osmanskog carstva, turski zapovednik Sinan-paša je naredio da se spale mošti Svetog Save na Vračaru verovatno 1594. Na mestu gde se misli da je bila dignuta lomača da uništi poslednje ostatke Svetog Save sazidan je Hram Svetog Save, najveća pravoslavna bogomolja kod Srba.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Zatvori</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Home(){
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
  const [modalShow4, setModalShow4] = React.useState(false);
  const [modalShow5, setModalShow5] = React.useState(false);
  return(
    <div>
             <div id="jumbo">
                 <div className="jumbotron" style={{backgroundImage:`url(${baner1})`,height:'cover'}}>
             </div>
             <div className="row mb-4">
                 <div className="col">
                     <img src={njegos1} onClick={() => setModalShow(true)} />
                     <p>Petar II Petrovic Njegos</p>
               </div>
                <div className="col">
                    <img src={vuk} onClick={() => setModalShow1(true)} />
                    <p>Vuk Stefanovic Karadzic</p>
                 </div>
                 <div className="col">
                     <img src={dositej} onClick={() => setModalShow2(true)} />
                     <p>Dositej Obradovic</p>
                 </div>
                 <div className="col">
                     <img src={tesla} onClick={() => setModalShow3(true)} />
                     <p>Nikola Tesla</p>
                 </div>
                 <div className="col">
                     <img src={mesa} onClick={() => setModalShow4(true)} />
                     <p>Mesa Selimovic</p>
                 </div>
                 <div className="col">
                     <img src={sava} onClick={() => setModalShow5(true)} />
                     <p>Sveti Sava</p>
                 </div>
             </div>

        <CardColumns>
        <Card className="text-right">
            <blockquote className="blockquote mb-0 card-body">
              <p>
              <strong>"</strong>Dođu, tako, vremena, kada pamet zašuti, budala progovori, a fukara se obogati!<strong>"</strong>
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Ivo Andric
                </small>
              </footer>
            </blockquote>
          </Card>
        <Card className="text-right" style={{backgroundColor: "#ffebc2"}}>
            <blockquote className="blockquote mb-0 card-body">
              <p>
              <strong>"</strong>Strah životu kalja obraz često. Ko na brdo, ak i malo, stoji više vidi no onaj pod brdom.<strong>"</strong>
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Petar II Petrovic Njegos, <cite title="Source Title">Gorski vijenac</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card className="text-right">
            <blockquote className="blockquote mb-0 card-body">
              <p>
              <strong>"</strong>Nemа utehe među ljudimа, iаko neki kаžu dа je u Bogu, а neki u pivu.<strong>"</strong>
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Milos Crnjanski
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card className="text-right" style={{backgroundColor: "#ffebc2"}} >
            <blockquote className="blockquote mb-0 card-body">
              <p>
              <strong>"</strong>Od svih “sila trenja”, ona koja najviše usporava ljudski napredak je neznanje, ono što Buda naziva “Najveće zlo u svetu”<strong>"</strong>

              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Nikola Tesla
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card className="text-right">
            <blockquote className="blockquote mb-0 card-body">
              <p>
              <strong>"</strong>Hodaćemo bez razloga, radovaćemo se bez razloga, smijaćemo se bez razloga, s jednim jedinim razlogom, što smo živi i što se volimo. A kud ćeš veći razlog.<strong>"</strong>
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Mesa Selimovic, <cite title="Source Title">Tvrdjava</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card className="text-right" style={{backgroundColor: "#ffebc2"}}>
            <blockquote className="blockquote mb-0 card-body">
              <p>
              <strong>"</strong>Na svim svojim putevima znajte da pravi budu putevi vaši i noge vaše neće se spoticati.<strong>"</strong>
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Sveti Sava
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card className="text-right">
            <blockquote className="blockquote mb-0 card-body">
              <p>
              <strong>"</strong>Ne brini ti, moj brajko, hoće li narod propasti ili neće, nego radi ono što si ti kadar! Pa ako svaki uradi onoliko koliko je kadar, neće narod nikad propasti.<strong>"</strong>.
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Vuk Stefanovic Karadzic
                </small>
              </footer>
            </blockquote>
          </Card>

          <Card className="text-right" style={{backgroundColor: "#ffebc2"}} >
            <blockquote className="blockquote mb-0 card-body">
              <p>
              <strong>"</strong>Mudar čovek se stidi mešati u ono u čemu nije vešt, a ludom se čini da je sramota ako svuda svoj nos ne uvuče.<strong>"</strong>
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Dositej Obradovic
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card className="text-right">
            <blockquote className="blockquote mb-0 card-body">
              <p>
              <strong>"</strong>Ko smisao života nije tražio, taj nije živeo. Ali ko ga je tražio, taj nikad nije bio dovoljno srećan.<strong>"</strong>
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Jovan Ducic
                </small>
              </footer>
            </blockquote>
          </Card>
        </CardColumns>









            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <MyVerticallyCenteredModal1
              show={modalShow1}
              onHide={() => setModalShow1(false)}
            />
            <MyVerticallyCenteredModal2
              show={modalShow2}
              onHide={() => setModalShow2(false)}
            />
            <MyVerticallyCenteredModal3
              show={modalShow3}
              onHide={() => setModalShow3(false)}
            />
            <MyVerticallyCenteredModal4
              show={modalShow4}
              onHide={() => setModalShow4(false)}
            />
              <MyVerticallyCenteredModal5
              show={modalShow5}
              onHide={() => setModalShow5(false)}
            />
           </div>
    </div>
  );
}

export default Home;