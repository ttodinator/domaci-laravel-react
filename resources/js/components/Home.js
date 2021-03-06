

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
        Petar II Petrovi?? Njego?? (1/13. novembar 1813 ??? 19/31. oktobar 1851) bio je srpski pravoslavni vladika crnogorski i brdski i poglavar Stare Crne Gore i Brda od 1830. do 1851. godine. Jedan je od najve??ih srpskih pjesnika i filozofa.

Ro??en je u selu Njegu??i, blizu Cetinja, kao Radoje ???Rade??? Tomov Petrovi??, a obrazovao se u nekoliko manastira u Crnoj Gori i postao je duhovni i svjetovni vo??a Crne Gore nakon smrti svog strica Petra I. Po??to je uklonio sve po??etne unutra??nje protivnike svojoj vladavini, skoncentrisao se na ujedinjavanje crnogorskih plemena i uspostavljanje centralizovane dr??ave. Uveo je redovne poreze i niz novih zakona da zamijene one koje su njegovi prethodnici uveli mnogo prije njega. Uvo??enje poreza se pokazalo vrlo nepopularnim me??u crnogorskim plemenima i zbog toga je tokom njegove vladavine izbilo nekoliko buna. Njego??eva vladavina je tako??e obilje??ena stalnim politi??kim i vojnim sukobom sa Osmanskim carstvom i njegovim poku??ajima da pro??iri teritoriju Crne Gore uz dobijanje bezuslovnog priznanja od Visoke porte. Zalagao se za oslobo??enje i ujedinjenje svih Srba i bio je spreman da se odrekne svojih svjetovnih vlasti zarad ujedinjenja sa Srbijom.

Njego?? je po??tovan kao pjesnik i filozof, a najpoznatiji je po svojoj epskoj poemi ???Gorski vijenac???, koja se smatra za remek-djelo srpske i ju??noslovenske knji??evnosti. Druga njegova va??na djela su ???Lu??a mikrokozma???, ???Ogledalo srpsko??? i ???La??ni car ????epan Mali???. Sahranjen je u maloj kapeli na Lov??enu, koju su sru??ili Austrougari u Prvom svjetskom ratu. Njegovi ostaci su premje??teni u Cetinjski manastir, a potom u obnovljenu kapelu 1925. godine. Kapela je uz podr??ku jugoslovenske vlade 1974. zamenjena Me??trovi??evim mauzolejom.

Petar II Petrovi?? Njego?? je na nivou Mitropolije Crnogorsko-primorske kanonizovan, i uveden u red svetitelja kao Sveti Mitropolit Petar Drugi Lov??enski Tajnovidac. Na nivou Mitropolije crnogorsko-primorske, 19. maj je ustanovljen kao datum praznovanja Svetog Mitropolita Petra Drugi Lov??enskog Tajnovidca kao svetitelja.
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
        Vuk Stefanovi?? Karad??i?? (Tr??i??, 6. novembar 1787 ??? Be??, 7. februar 1864) je bio srpski filolog, reformator srpskog jezika, sakuplja?? narodnih umotvorina i pisac prvog re??nika srpskog jezika. Vuk je najzna??ajnija li??nost srpske knji??evnosti prve polovine XIX veka. Ro??en u vrijeme zlo i mu??no, u dane kada se ??inja??e da je skoro uga??en ??ivot srpskog naroda. Vuk je stao na snagu u vrijeme juna??ko. Stekao je i nekoliko po??asnih doktorata. Imao je nekoliko bra??e i sestara koji su umrli. U tada??nje vreme se verovalo da je to zbog duhova i ve??tica. Posle smrti dosta njegove bra??e njegovi roditelji su mu dali ime Vuk da bi to ime oteralo duhove i ve??tice.

        U??estvovao je u Prvom srpskom ustanku kao pisar i ??inovnik u Negotinskoj krajini, a nakon sloma ustanka preselio se u Be??, 1813. godine. Tu je upoznao Jerneja Kopitara, cenzora slovenskih knjiga, na ??iji je podsticaj krenuo u prikupljanje srpskih narodnih pesama, reformu ??irilice i borbu za uvo??enje narodnog jezika u srpsku knji??evnost. Vukovim reformama u srpski jezik je uveden fonetski pravopis, a srpski jezik je potisnuo slavenosrpski jezik koji je u to vreme bio jezik obrazovanih ljudi. Tako se kao najva??nije godine Vukove reforme isti??u 1818, 1836, 1839, 1847. i 1852.
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
        Dimitrije Obradovi?? (crkveno ime Dositej; ??akovo, 1739 ili 1742. ??? Beograd, 28. mart 1811) bio je srpski prosvetitelj i reformator revolucionarnog perioda nacionalnog bu??enja i preporoda. Bio je osniva?? i profesor Velike ??kole, prete??e Beogradskog univerziteta. Dositej je bio prvi pope??itelj prosvete u Sovjetu i autor sve??ane pesme ???Vostani Serbije???.

        Ro??en je u rumunskom delu Banata tada??nje Austrije. ??kolovao se za kalu??era, ali je napustio taj poziv i krenuo na putovanja po celoj Evropi, gde je primio ideje evropskog prosvetiteljstva i racionalizma. Ponesen takvim idejama radio je na prosve??ivanju svog naroda, prevodio je razna dela me??u kojima su najpoznatije Ezopove basne, a potom je i sam pisao dela, prvenstveno programskog tipa, me??u kojima je najpoznatije ?????ivot i priklju??enija???. Njegovi ostaci po??ivaju u Beogradu, na ulazu u Sabornu crkvu, iako je njegova izri??ita ??elja bila da bude sahranjen pored Hajdu??ke ??esme u beogradskom Ko??utnjaku.
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
        Nikola Tesla (Smiljan, 10.7.1856. - New York, 7.1.1943.) bio je nau??nik i inovator svjetskog glasa. Radio je u podru??ju elektrotehnike i radiotehnike, te je izumio okretno magnetsko polje i vi??efazni sustav izmjeni??nih struja.

        Najzna??ajniji Teslini pronalasci su polifazni sistem, obrtno magnetsko polje, asinhroni motor, sinhroni motor i Teslin transformator. Tako??e, otkrio je jedan od na??ina za generisanje visokofrekventne struje, dao je zna??ajan doprinos u prenosu i modulaciji radio-signala, a ostali su zapa??eni i njegovi radovi u oblasti rendgenskih zraka.

        Njegov sistem naizmeni??nih struja je omogu??io znatno lak??i i efikasniji prenos elektri??ne energije na daljinu. Bio je klju??ni ??ovek na izgradnji prve hidrocentrale na Nijagarinim vodopadima.

        U nekoliko je navrata nominiran za Nobelovu nagradu za fiziku, ali ju nikada nije dobio; jedan od razloga je ??to ju nije htio dijeliti s Edisonom, a ??vedska akadmija nije ??eljela dijeliti nagrade svakom od njih pojedina??no.

        Preminuo je u svojoj 87. godini, siroma??an i zaboravljen.

        Jedini je Srbin po kome je nazvana jedna me??unarodna jedinica mere, jedinica mere za gustinu magnetnog fluksa ili ja??inu magnetnog polja, tesla.

        Nikola Tesla je autor vi??e od 700 patenata, registrovanih u 25 zemalja, od ??ega u oblasti elektrotehnike 112
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
        Ro??en je 26. aprila 1910. godine u Tuzli. U rodnom gradu zavr??io je osnovnu ??kolu i gimnaziju. Godine 1930. upisao se na studijsku grupu srpskohrvatski jezik i jugoslovenska knji??evnost Filozofskog fakulteta u Beogradu. Diplomirao je 1934. godine, a od 1935. do 1941. godine radi kao profesor Gra??anske ??kole, a potom je 1936. godine postavljen za suplenta u Realnoj gimnaziji u Tuzli.

Prve dve godine rata ??iveo je u Tuzli, gde je bio uhap??en zbog saradnje sa Narodnooslobodila??kim pokretom, a u maju 1943. godine pre??ao je na oslobo??enu teritoriju. Tada je postao ??lan Komunisti??ke partije Jugoslavije i ??lan Agitprop-a za isto??nu Bosnu, potom je bio politi??ki komesar Tuzlanskog partizanskog odreda. Godine 1944. pre??ao je u Beograd, gde je obavljao zna??ajne politi??ke i kulturne funkcije. Od 1947. godine ??iveo je u Sarajevu i radio kao:
        </p>
        <ul>
          <li>profesor Vi??e pedago??ke ??kole,</li>
          <li>docent Filozofskog fakulteta,</li>
          <li>umetni??ki direktor ???Bosna-filma???,</li>
          <li>direktor drame Narodnog pozori??ta,</li>
          <li>glavni urednik IP ???Svjetlost???.</li>
        </ul>
<p>
Godine 1971. je penzionisan i preselio se januara 1973. godine u Beograd. Tokom ??ivota dva puta se ??enio, sa drugom suprugom je imao dve k??erke. Umro je 11. jula 1982. godine u Beogradu, gde je sahranjen u Aleji zaslu??nih gra??ana.

Bio je redovni ??lan Srpske akademije nauka i umetnosti.
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
        Sveti Sava (oko 1175???14. januar 1236) bio je srpski princ, monah, iguman manastira Studenice, knji??evnik, diplomata i prvi arhiepiskop autokefalne Srpske pravoslavne crkve. Ro??en je kao Rastko Nemanji??, najmla??i sin velikog ??upana Stefana Nemanje, i brat Vukana i Stefana Prvoven??anog.

Kao mladi?? dobio je od oca na upravu Zahumlje (1190. ili 1191). Ubrzo 1192. godine Rastko je pobegao na Svetu goru i zamona??io se u ruskom manastiru Svetog Pantelejmona, gde je dobio ime Sava. Kasnije je sa svojim ocem, koji se zamona??io i dobio ime Simeon (verovatno 25. mart 1196), podigao manastir Hilandar (1198???99), prvi i jedini srpski manastir na Svetoj gori.

U Srbiji je 1202. godine do??lo do rata za vlast izme??u sinova ??upana Stefana Nemanje. Posle izmirenja 1204. godine veliki ??upan Stefan Prvoven??ani i knez Vukan pozvali su Savu da ih potpuno izmiri i on se vratio u Srbiju po??etkom 1208. godine. Istovremeno se bavio prosvetiteljskim radom, nastoje??i pribli??iti svojim sunarodnicima osnove verske i svetovne pouke, da bi se 1217. vratio na Svetu goru. Godine 1219. Sava I Srpski je ubedio Vaseljenskog patrijarha i nikejskog cara da odobre autokefalnost (samostalnost) srpske crkve sa statusom arhiepiskopije. Vaseljenski patrijarh Manojlo I Carigradski u Nikeji je imenovao Savu I za prvog arhiepiskopa Srbije. Sava ostao je arhiepiskop sve do 1233. godine, da bi ga tada zamenio njegov u??enik Arsenije I Sremac.

Dva puta je putovao u Palestinu. Na povratku sa drugog od tih hodo??a????a u Svetu zemlju, smrt ga je zatekla u tada??njoj bugarskoj prestonici Velikom Trnovu 14. januara 1236. Njegove mo??ti je u manastir Mile??evu preneo njegov ne??ak, kralj Stefan Vladislav I.

Sava je ostavio vi??e pisanih dela. Zato je bio jedan od zna??ajnijih pisaca i pravnika iz srednjeg veka kod Srba. Njegova najzna??ajnija pisana dela su ??itije Svetog Simeona, Karejski tipik, Hilandarski tipik i Studeni??ki tipik, kao i Zakonopravilo.

Obrazuju??i budu??e slu??benike pravoslavne crkve stekao je velike zasluge za razvoj ??kolstva i prosvete kod Srba u srednjem veku. U Srbiji i Republici Srpskoj se dan njegove smrti (27. januar po novom kalendaru) obele??ava kao Dan prosvete.

Savin kult u narodu bio je jak. Posle jednog ustanka Srba protiv Osmanskog carstva, turski zapovednik Sinan-pa??a je naredio da se spale mo??ti Svetog Save na Vra??aru verovatno 1594. Na mestu gde se misli da je bila dignuta loma??a da uni??ti poslednje ostatke Svetog Save sazidan je Hram Svetog Save, najve??a pravoslavna bogomolja kod Srba.
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
             <div className="row mt-5">

             </div>
             <div id="jumbo mt-5">
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

        <CardColumns className="mb-5">
        <Card className="text-right">
            <blockquote className="blockquote mb-0 card-body">
              <p>
              <strong>"</strong>Do??u, tako, vremena, kada pamet za??uti, budala progovori, a fukara se obogati!<strong>"</strong>
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
              <strong>"</strong>Strah ??ivotu kalja obraz ??esto. Ko na brdo, ak i malo, stoji vi??e vidi no onaj pod brdom.<strong>"</strong>
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
              <strong>"</strong>Nem?? utehe me??u ljudim??, i??ko neki k????u d?? je u Bogu, ?? neki u pivu.<strong>"</strong>
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
              <strong>"</strong>Od svih ???sila trenja???, ona koja najvi??e usporava ljudski napredak je neznanje, ono ??to Buda naziva ???Najve??e zlo u svetu???<strong>"</strong>

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
              <strong>"</strong>Hoda??emo bez razloga, radova??emo se bez razloga, smija??emo se bez razloga, s jednim jedinim razlogom, ??to smo ??ivi i ??to se volimo. A kud ??e?? ve??i razlog.<strong>"</strong>
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
              <strong>"</strong>Na svim svojim putevima znajte da pravi budu putevi va??i i noge va??e ne??e se spoticati.<strong>"</strong>
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
              <strong>"</strong>Ne brini ti, moj brajko, ho??e li narod propasti ili ne??e, nego radi ono ??to si ti kadar! Pa ako svaki uradi onoliko koliko je kadar, ne??e narod nikad propasti.<strong>"</strong>.
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
              <strong>"</strong>Mudar ??ovek se stidi me??ati u ono u ??emu nije ve??t, a ludom se ??ini da je sramota ako svuda svoj nos ne uvu??e.<strong>"</strong>
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
              <strong>"</strong>Ko smisao ??ivota nije tra??io, taj nije ??iveo. Ali ko ga je tra??io, taj nikad nije bio dovoljno sre??an.<strong>"</strong>
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