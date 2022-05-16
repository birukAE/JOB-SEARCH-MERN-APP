import React from 'react';
import GlobalStyle from './globalestyles';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import TopContainer from './container/WebNavbar/WebNavbar';
 import Login from "./pages/login/login";
import Homepage from './pages/HomePage/Homepage';
import { Footer } from './container/footer/Footer';
import  Services  from './pages/services/Service';
import Profile from "./pages/profile/profile"
import Signup from './pages/registration/regbutton'
import Account from './pages/account/account';
import Memebership from './pages/memebership/memebership';
import Post from './pages/post/post'
import Admin from './pages/adminlog/adminlog';
import Loginpost from './pages/loginpost/loginpost';
import JOBS from './pages/jobs/jobs';
import Show from './pages/showmore/showmore';
import SCHOLAR from './pages/post scholar/post scholar';
import SPOST from './pages/sholarship/scholarship';
import Sadmin from './pages/adminlog/admin';
import APPLY from './pages/memebership/apply';
import Melogin from './pages/login/melogin';
import Logoutfun from './pages/logout/logout';
import Showjob from './pages/showmore/showmorejob'
import Application from './pages/memebership/apply2';
import Jobdata from './Data.json'
import ENGINEERING from './jobcatagory/engineering';
import ACCOUNTING from './jobcatagory/accunting';
import BUSINESS from './jobcatagory/business';

import LOW from './jobcatagory/low';
import AGRICULTURE from './jobcatagory/agriculture';
import SPORT from './jobcatagory/sport';
import MEDICENE from './jobcatagory/medicen';
import IT from './jobcatagory/it';
import  POLETICA from './jobcatagory/poletics';
import SOCIAL from './jobcatagory/social';
import HOTEL from './jobcatagory/hotel';
import JOURNALISEM from './jobcatagory/journalism';
import LINGUSTICS from './jobcatagory/lingustics';
import APPLIED from './jobcatagory/applied';
import EDUCATION from './jobcatagory/education';
import SECRATARY from './jobcatagory/secratary';
import PSYICOLOGY from './jobcatagory/psyicology';
import LAND from './jobcatagory/land';
import HISTORY from './jobcatagory/history';
import FASHION from './jobcatagory/fashion';
import ART from './jobcatagory/art';
import VIDEO from './jobcatagory/video';
import SELLS from './jobcatagory/sells';
import COMMUNICATION from './jobcatagory/network';
import ROAD from './jobcatagory/transport';
import PHYSICAL from './jobcatagory/physical';
import SHEFE from './jobcatagory/shefe';
import WEB from './jobcatagory/web';
import AGENT from './jobcatagory/agent';
import FRESH from './jobcatagory/fresh';
import CONTRAT from './jobcatagory/contrat';
import LONG from './jobcatagory/long';
import FREELANCING from './jobcatagory/freelancing';
import NGO from './jobcatagory/ngo';
import Resumes from './pages/resumes/resumes';


import Poland from './catagories/poland';
import Africa from './catagories/african';
import America from './catagories/american';
import Argentina from './catagories/argintina';
import Australia from './catagories/australia';
import Belgium from './catagories/belgium';
import Brazil from './catagories/brazilian';
import Canada from './catagories/canadian';
import China from './catagories/china';
import Dinmark from './catagories/denmark';
import Developing from './catagories/developing';
import Dubai from './catagories/dubia';
import Eastafrica from './catagories/eastafrica';
import England from './catagories/england';
import Ethiopian from './catagories/ethiopian';
import Europe from './catagories/europ';
import France from './catagories/france';
import Ghana from './catagories/ghana';
import India from './catagories/indian';
import International from './catagories/international';
import Japan from './catagories/japan';
import Nigeria from './catagories/nigeria';
import Norway from './catagories/norway';
import Russian from './catagories/russian';
import Saudi from './catagories/saudi arbia';
import Southafrican from './catagories/south african';
import Southamerican from './catagories/south american';
import Spain from './catagories/spain';
import Subsahara from './catagories/sub sharan';
import Tanzania from './catagories/tanzania';
import Turky from './catagories/turky';
import Esian from './catagories/easian';

import German from './catagories/german';
import Regbutton from './pages/registration/regbutton';
import Memberreg from './pages/registration/memberreg';
import Companyreg from './pages/registration/companyreg';
import Registration from './pages/registration/registration';
import Updatemem from   './pages/profile/updatemem';
import Updatepackmem from './pages/profile/updatepackmem';
function App() {
  return (
  <Router>
       <GlobalStyle />
  <TopContainer data={Jobdata}/>
  <Switch>
  <Route path='/' exact component={Homepage} />
  </Switch>
  <Switch>
  <Route path='/services' exact component={Services} />
  </Switch>
  <Switch>
  <Route path='/logout' exact component={Logoutfun} />
  </Switch>
  <Switch>
  <Route path='/account' exact component={Account} />
  </Switch>
  <Switch>
  <Route path='/memebership' exact component={Melogin} />
  </Switch>
  <Switch>
  <Route path='/post' exact component={Login} />
  </Switch>
  <Switch>
  <Route path='/Help' exact component={Post} />
  </Switch>

  <Switch>
  <Route path='/admin' exact component={Admin} />
  </Switch>
  <Switch>
  <Route path='/show/:showId'render={(props)=><Showjob />} />
  </Switch>
  <Switch>
  <Route path='/loginpost' exact component={Loginpost} />
  </Switch>
  
  <Switch>
  <Route path='/jobs' exact component={JOBS } />
  </Switch>

  <Switch>
  <Route path='/shows/:showId' render={(props)=><Show />} />
  </Switch>
  
  <Switch>
  <Route path='/ascholar' exact component={SCHOLAR} />
  </Switch>

  <Switch>
  <Route path='/apply' exact component={APPLY} />
  </Switch>
  <Switch>
  <Route path='/apply2/:showId' render={(props)=><Application />} />
  </Switch>
  <Switch>
  <Route path='/profile' exact component={Profile} />
  </Switch>
  <Switch>
  <Route path='/updatemem' exact component={Updatemem} />
  </Switch>
  <Switch>
  <Route path='/updatepackmem' exact component={Updatepackmem} />
  </Switch>
  <Switch>
  <Route path='/scholar' exact component={Sadmin} />
  </Switch>
  <Switch>
  <Route path='/scholarpost' exact component={SPOST} />
  </Switch>
  <Switch>
  <Route path='/sadmin' exact component={SCHOLAR} />
  </Switch>
  <Switch>
  <Route path='/log in' exact component={Regbutton} />
  </Switch>
  <Switch>
  <Route path='/reg' exact component={Registration} />
  </Switch>
  <Switch>
  <Route path='/memberreg' exact component={Memberreg} />
  </Switch>
  <Switch>
  <Route path='/companyreg' exact component={Companyreg} />
  </Switch>
  <Switch>
  <Route path='/resumes' exact component={Resumes} />
  </Switch>


  <Switch>
  <Route path='engineering/' exact component={ENGINEERING} />
  </Switch>
   <Switch>
  <Route path='/accounting' exact component={ACCOUNTING} />
  </Switch> <Switch>
  <Route path='/business' exact component={BUSINESS} />
  </Switch> <Switch>
  <Route path='/low' exact component={LOW} />
  </Switch> <Switch>
  <Route path='/agriculture' exact component={AGRICULTURE} />
  </Switch> <Switch>
  <Route path='/sport' exact component={SPORT} />
  </Switch> <Switch>
  <Route path='/medicene' exact component={MEDICENE} />
  </Switch> <Switch>
  <Route path='/it' exact component={IT} />
  </Switch> <Switch>
  <Route path='/poletica' exact component={POLETICA} />
  </Switch> <Switch>
  <Route path='/social' exact component={SOCIAL} />
  </Switch> <Switch>
  <Route path='/hotel' exact component={HOTEL} />
  </Switch> <Switch>
  <Route path='/journalisem' exact component={JOURNALISEM} />
  </Switch> <Switch>
  <Route path='/lingustics' exact component={LINGUSTICS} />
  </Switch> <Switch>
  <Route path='/applied' exact component={APPLIED} />
  </Switch> <Switch>
  <Route path='/education' exact component={EDUCATION} />
  </Switch> <Switch>
  <Route path='/secratary' exact component={SECRATARY} />
  </Switch> <Switch>
  <Route path='/psyicology' exact component={PSYICOLOGY} />
  </Switch> <Switch>
  <Route path='/land' exact component={LAND} />
  </Switch> <Switch>
  <Route path='/history' exact component={HISTORY} />
  </Switch> <Switch>
  <Route path='/fashion' exact component={FASHION} />
  </Switch> <Switch>
  <Route path='/art' exact component={ART} />
  </Switch> <Switch>
  <Route path='/video' exact component={VIDEO} />
  </Switch> <Switch>
  <Route path='/sells' exact component={SELLS} />
  </Switch> <Switch>
  <Route path='/communication' exact component={COMMUNICATION} />
  </Switch> <Switch>
  <Route path='/road' exact component={ROAD} />
  </Switch> <Switch>
  <Route path='/physical' exact component={PHYSICAL} />
  </Switch> <Switch>
  <Route path='shefe' exact component={SHEFE} />
  </Switch> <Switch>
  <Route path='/web' exact component={WEB} />
  </Switch> <Switch>
  <Route path='/agent' exact component={AGENT} />
  </Switch> <Switch>
  <Route path='/ngo' exact component={NGO} />
  </Switch> <Switch>
  <Route path='/fresh' exact component={FRESH} />
  </Switch> 
   <Switch>
  <Route path='/contrat' exact component={CONTRAT} />
  </Switch> <Switch>
  <Route path='/long' exact component={LONG} />
  </Switch>


  <Switch>
  <Route path='/freelancing' exact component={FREELANCING} />
  </Switch>


  <Switch>
  <Route path='/Poland' exact component={Poland} />
  </Switch>
  <Switch>
  <Route path='/Ethiopian' exact component={Ethiopian} />
  </Switch>
  <Switch>
  <Route path='Japan' exact component={Japan} />
  </Switch>
  <Switch>
  <Route path='/Southafrican' exact component={Southafrican} />
  </Switch>
  <Switch>
  <Route path='/India' exact component={India} />
  </Switch>
  <Switch>
  <Route path='/China' exact component={China} />
  </Switch>
  <Switch>
  <Route path='/German' exact component={German} />
  </Switch>
  <Switch>
  <Route path='/France' exact component={France} />
  </Switch>
  <Switch>
  <Route path='/Russian' exact component={Russian} />
  </Switch>
  <Switch>
  <Route path='/Canada' exact component={Canada} />
  </Switch>
  <Switch>
  <Route path='/Dinmark' exact component={Dinmark} />
  </Switch>
  <Switch>
  <Route path='/England' exact component={England} />
  </Switch>
  <Switch>
  <Route path='/Nigeria' exact component={Nigeria} />
  </Switch>
  <Switch>
  <Route path='/Belgium' exact component={Belgium} />
  </Switch>
  <Switch>
  <Route path='/Norway' exact component={Norway} />
  </Switch>
  <Switch>
  <Route path='/Spain' exact component={Spain} />
  </Switch>
  <Switch>
  <Route path='/Ghana' exact component={Ghana} />
  </Switch>
  <Switch>
  <Route path='Turky' exact component={Turky} />
  </Switch>
  <Switch>
  <Route path='/Tanzania' exact component={Tanzania} />
  </Switch>
  <Switch>
  <Route path='/Dubai' exact component={Dubai} />
  </Switch>
  <Switch>
  <Route path='/Saudi' exact component={Saudi} />
  </Switch>
  <Switch>
  <Route path='/Brazil' exact component={Brazil} />
  </Switch>
  <Switch>
  <Route path='/Argentina' exact component={Argentina} />
  </Switch>
  <Switch>
  <Route path='/australia' exact component={Australia} />
  </Switch>
  <Switch>
  <Route path='/America' exact component={America} />
  </Switch>
  <Switch>
  <Route path='/Eastafrica' exact component={Eastafrica} />
  </Switch>
  <Switch>
  <Route path='/Subsahara/' exact component={Subsahara} />
  </Switch>
  <Switch>
  <Route path='/Esian' exact component={Esian} />
  </Switch>
  <Switch>
  <Route path='/Africa' exact component={Africa} />
  </Switch>
  <Switch>
  <Route path='/Developing' exact component={Developing} />
  </Switch>
  <Switch>
  <Route path='/International' exact component={International} />
  </Switch>
  <Switch>
  <Route path='/Europe' exact component={Europe} />
  </Switch>
  <Switch>
  <Route path='/Esian' exact component={Esian} />
  </Switch>
  <Switch>
  <Route path='/Southamerican' exact component={Southamerican} />
  </Switch>
  <Footer />

    </Router>

   ) }

export default App;
