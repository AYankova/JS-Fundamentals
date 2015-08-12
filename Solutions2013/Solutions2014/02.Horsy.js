function Solve(args) {
    var dims = args[0].split(' ').map(Number),
        R = dims[0],
        C = dims[1],
        dirs = [],
        matrix = [],
        jumps = 0,
        sum = 0;

    for (var i = 0; i < R; i += 1) {
        dirs[i] = [];
        dirs[i] = args[i + 1].split('').map(Number);
    }
    //console.log(dirs);

    for (var j = 0; j < R; j += 1) {
        matrix[j] = [];
        for (var k = 0; k < C; k += 1) {
            matrix[j][k] = Math.pow(2, j) - k;
        }
    }
    //console.log(matrix);

    var reversed = [];
    for (var l = 0; l < R; l += 1) {
        reversed[l] = [];
        for (var n = 0; n < C; n += 1) {
            reversed[l][n] = matrix[R - l - 1][C - n - 1];
        }
    }

    var col = C - 1;
    var row = R - 1;
    sum+=matrix[row][col];

    while (true) {
        //console.log(reversed);

        switch (dirs[row][col]) {
            case 1:
                if (!isNaN(reversed[R - row - 1][C - col - 1])) {
                if (col < 0 || row - 2 < 0 || col + 1 >= C || row >= R) return 'Go go Horsy! Collected ' + sum + ' weeds';
                    sum += matrix[row-2][col+1] ;
                    jumps++;
                    reversed[R - row - 1][C - col - 1] = 'F';
                    row -= 2;
                    col++;
                } else {
                    return 'Sadly the horse is doomed in ' + jumps + ' jumps';
                }
                break;
            case 2:
                if (!isNaN(reversed[R - row - 1][C - col - 1])) {
                if (col < 0 || row - 1 < 0 || col + 2 >= C || row >= R) return 'Go go Horsy! Collected ' + sum + ' weeds';
                     sum += matrix[row-1][col+2] ;
                    jumps++;
                    reversed[R - row - 1][C - col - 1] = 'F';
                    row--;
                    col += 2;
                } else {
                    return 'Sadly the horse is doomed in ' + jumps + ' jumps';
                }
                break;
            case 3:
                if (!isNaN(reversed[R - row - 1][C - col - 1])) {
                if (col < 0 || row < 0 || col + 2 >= C || row + 1 >= R) return 'Go go Horsy! Collected ' + sum + ' weeds';
                    sum += matrix[row ][col+2]+matrix[row+1][col+2] ;
                    jumps++;
                    reversed[R - row - 1][C - col - 1] = 'F';
                    row++;
                    col += 2;
                } else {
                    return 'Sadly the horse is doomed in ' + jumps + ' jumps';
                }
                break;
            case 4:
                if (!isNaN(reversed[R - row - 1][C - col - 1])) {
                if (col < 0 || row < 0 || col + 1 >= C || row + 2 >= R) return 'Go go Horsy! Collected ' + sum + ' weeds';
                    sum += matrix[row+2][col+1];
                    jumps++;
                    reversed[R - row - 1][C - col - 1] = 'F';
                    row += 2;
                    col++;
                } else {
                    return 'Sadly the horse is doomed in ' + jumps + ' jumps';
                }
                break;
            case 5:
                if (!isNaN(reversed[R - row - 1][C - col - 1])) {
                if (col - 1 < 0 || row < 0 || col >= C || row + 2 >= R) return 'Go go Horsy! Collected ' + sum + ' weeds';
                    sum += matrix[row+2][col-1];
                    jumps++;
                    reversed[R - row - 1][C - col - 1] = 'F';
                    row += 2;
                    col--;
                } else {
                    return 'Sadly the horse is doomed in ' + jumps + ' jumps';
                }
                break;
            case 6:
                if (!isNaN(reversed[R - row - 1][C - col - 1])) {
                if (col - 2 < 0 || row < 0 || col >= C || row + 1 >= R) return 'Go go Horsy! Collected ' + sum + ' weeds';
                    sum += matrix[row+1][col-2];
                    jumps++;
                    reversed[R - row - 1][C - col - 1] = 'F';
                    row++;
                    col -= 2;
                } else {
                    return 'Sadly the horse is doomed in ' + jumps + ' jumps';
                }
                break;
            case 7:
                if (!isNaN(reversed[R - row - 1][C - col - 1])) {
                if (col - 2 < 0 || row - 1 < 0 || col >= C || row >= R) return 'Go go Horsy! Collected ' + sum + ' weeds';
                    sum +=+matrix[row-1][col-2];
                    jumps++;
                    reversed[R - row - 1][C - col - 1] = 'F';
                    row--;
                    col -= 2;
                } else {
                    return 'Sadly the horse is doomed in ' + jumps + ' jumps';
                }
                break;
            case 8:
                if (!isNaN(reversed[R - row - 1][C - col - 1])) {               	
                if (col - 1 < 0 || row - 2 < 0 || col >= C || row >= R) return 'Go go Horsy! Collected ' + sum + ' weeds';
                    sum += matrix[row-2][col-1] ;
                    jumps++;
                    reversed[R - row - 1][C - col - 1] = 'F';
                    row -= 2;
                    col--;
                } else {
                    return 'Sadly the horse is doomed in ' + jumps + ' jumps';
                }

                break;
        }
    }
    return 'Go go Horsy! Collected ' + sum + ' weeds';
}

var args = [
    '3 5',
    '54561',
    '43328',
    '52388',
];


//console.log(Solve(args));

var args1 = ['3 170',
'65256624788315872547146742545371652845427473747267157662731442588248254733848315117257871124376782841157534346443612618725181711166757567365663638423518322167414635742267',
'45455813336725247538881424621676377742372315377756873812547467266271517642434424316613753727845166781146278516761172147847651254585283744475617153481423232871713755726637',
'61554736574112247245452874872314627642462447345828387664685574613831561533388314718463335155846275353167535228183566874387343281726347481161154526852575881675721325662347',
];
console.log(Solve(args1));


var args2 = ['5 256', '3886724545254458378884624186457483813136753571388822335377121651534618634456548235182228387255416374742238438864315437476265841886614158714436284883653262871574712861823671518152281571785426843558625325431474522855788678177857685377681541146338164113485642', '4344837364532162827168554523411673487612281711166182866564733754432387228235233332254123777617352715446411178864375214228344471735587162276811418424558135526484142381617287721841786462245451863817866512827355736826864732843184156364875822831348185836714263', '5527267142442855148171841325677755312681613837357784141378347426451886178665654177388246657324225623156665484454752715484852386324264282131227361472816255652255653641874483858466481633465727854644183333423463155342132523568711468564344377351547888284841882','1884267532616384286258255482376586823483527533438288443677284272512731231245561534883261318865643368344548264266566852434712372642881188711363276641576834246633367288222857533837184446611383171276431758154686347176576287771368354415746588632148558742825766','6844783124737577831732836584255637884746265532344528134824871862132114614465748688443474264734333282612477416277774712227884718353725347637657777456365122482181865365563366286834244371743641147755271724663313671376823716678423184487753168357645218371173257' ];
console.log(Solve(args2));

//console.log(Solve(args2));
/*function Solve(args) {
    var dims = args[0].split(' ').map(Number),
        R = dims[0],
        C = dims[1],
        dirs = [],
        matrix = [],
        jumps = 0,
        sum = 0;

    for (var i = 0; i < R; i += 1) {
        dirs[i] = [];
        dirs[i] = args[i + 1].split('').map(Number);
    }
    //console.log(dirs);

    for (var j = 0; j < R; j += 1) {
        matrix[j] = [];
        for (var k = 0; k < C; k += 1) {
            matrix[j][k] = Math.pow(2, j) - k;
        }
    }
    //console.log(matrix);

    var reversed = [];
    for (var l = 0; l < R; l += 1) {
        reversed[l] = [];
        for (var n = 0; n < C; n += 1) {
            reversed[l][n] = matrix[R - l - 1][C - n - 1];
        }
    }

    var col = C - 1;
    var row = R - 1;

    while (true) {
        //console.log(reversed);

        switch (dirs[row][col]) {
            case 1:
                if (!isNaN(reversed[R - row - 1][C - col - 1])) {
                    jumps++;   
                    reversed[R - row - 1][C - col - 1] = 'F';         	
                    if (col < 0 || row < 0 || col >= C || row >= R) return 'Go go Horsy! Collected ' + sum + ' weeds';
                    sum += matrix[row][col];
                    row -= 2;
                    col++;
                } else {
                    return 'Sadly the horse is doomed in ' + jumps + ' jumps';
                }
                break;
            case 2:
                //console.log('In two:' + dirs[row][col]);
                if (!isNaN(reversed[R - row - 1][C - col - 1])) {
                    jumps++;
                    reversed[R - row - 1][C - col - 1] = 'F';
                    if (col < 0 || row < 0 || col >= C || row >= R) return 'Go go Horsy! Collected ' + sum + ' weeds';
                    sum += matrix[row][col];
                    //console.log('sum in two:' + sum);
                    //console.log('AFTER' + sum);
                    //console.log(row);
                    //console.log(col);
                    row--;
                    col += 2;
                    // console.log(row);
                    // console.log(col);
                } else {
                    return 'Sadly the horse is doomed in ' + jumps + ' jumps';
                }
                break;
            case 3:
                //console.log(dirs[row][col]);
                if (!isNaN(reversed[R - row - 1][C - col - 1])) {
                    jumps++;
                    reversed[R - row - 1][C - col - 1] = 'F';
                    if (col < 0 || row < 0 || col >= C || row >= R) return 'Go go Horsy! Collected ' + sum + ' weeds';
                    sum += matrix[row][col];
                    //console.log(sum);
                    row++;
                    col += 2;
                } else {
                    return 'Sadly the horse is doomed in ' + jumps + ' jumps';
                }
                break;
            case 4:
                if (!isNaN(reversed[R - row - 1][C - col - 1])) {
                    jumps++;
                    reversed[R - row - 1][C - col - 1] = 'F';
                    if (col < 0 || row < 0 || col >= C || row >= R) return 'Go go Horsy! Collected ' + sum + ' weeds';
                    sum += matrix[row][col];
                    row += 2;
                    col++;
                } else {
                    return 'Sadly the horse is doomed in ' + jumps + ' jumps';
                }
                break;
            case 5:
                //console.log(dirs[row][col]);
                if (!isNaN(reversed[R - row - 1][C - col - 1])) {
                    jumps++;
                    reversed[R - row - 1][C - col - 1] = 'F';
                    if (col < 0 || row < 0 || col >= C || row >= R) return 'Go go Horsy! Collected ' + sum + ' weeds';
                    sum += matrix[row][col];
                    //console.log(row);
                    //console.log(col);
                    row += 2;
                    col--;
                    //console.log(sum);
                    //console.log(row);
                    //console.log(col);
                } else {
                    return 'Sadly the horse is doomed in ' + jumps + ' jumps';
                }
                break;
            case 6:
                //console.log(dirs[row][col]);
                if (!isNaN(reversed[R - row - 1][C - col - 1])) {
                    jumps++;
                    reversed[R - row - 1][C - col - 1] = 'F';
                    if (col < 0 || row < 0 || col >= C || row >= R) return 'Go go Horsy! Collected ' + sum + ' weeds';
                    sum += matrix[row][col];
                    //console.log(row);
                    //console.log(col);
                    row++;
                    col -= 2;
                    //console.log(sum);
                    //console.log(row);
                    //console.log(col);
                } else {
                    return 'Sadly the horse is doomed in ' + jumps + ' jumps';
                }
                break;
            case 7:
                if (!isNaN(reversed[R - row - 1][C - col - 1])) {
                    jumps++;
                    reversed[R - row - 1][C - col - 1] = 'F';
                    if (col < 0 || row < 0 || col >= C || row >= R) return 'Go go Horsy! Collected ' + sum + ' weeds';
                    sum += matrix[row][col];
                    row--;
                    col -= 2;
                } else {
                    return 'Sadly the horse is doomed in ' + jumps + ' jumps';
                }
                break;
            case 8:
                console.log(dirs[row][col]);
                if (!isNaN(reversed[R - row - 1][C - col - 1])) {
                    jumps++;
                    reversed[R - row - 1][C - col - 1] = 'F';
                    if (col < 0 || row < 0 || col >= C || row >= R) return 'Go go Horsy! Collected ' + sum + ' weeds';
                    sum += matrix[row][col];
                    console.log(sum);
                    console.log(row);
                    console.log(col);
                    row -= 2;
                    col--;
                    //console.log(sum);
                    //console.log(row);
                    //console.log(col);
                } else {
                    return 'Sadly the horse is doomed in ' + jumps + ' jumps';
                }

                break;
        }
    }
    return 'Go go Horsy! Collected ' + sum + ' weeds';
}

var args = [
    '3 5',
    '54561',
    '43328',
    '52388',
];


console.log(Solve(args));

var args1 = ['3 170',
    '65256624788315872547146742545371652845427473747267157662731442588248254733848315117257871124376782841157534346443612618725181711166757567365663638423518322167414635742267',
    '45455813336725247538881424621676377742372315377756873812547467266271517642434424316613753727845166781146278516761172147847651254585283744475617153481423232871713755726637',
    '61554736574112247245452874872314627642462447345828387664685574613831561533388314718463335155846275353167535228183566874387343281726347481161154526852575881675721325662347',
];
console.log(Solve(args1));

var args2 = ['8 426',
    '273568783336522683365643747528853214366336353817751562447472546731484744766411147626577666385322646317832263284224515276375882254372324367466223342465321747633217815283123336688364144432362673285416555264514787423451222168581866178644373657561686521247238178825733422362748725876473211252511668556451258183122627744441745457784825285485725366173117838358561863412113534444822247446141442672377536351775515532822148432563586421',
    '853872886764257826562612743783315748637164382345518544776782825466725263864878643457184163414848371767162366278235187478614687124136788536583365261224745662532148813365637887323488454275874473485425873535764762142725738121623256332362344211173822475688385783137548576456117734821566451287473438472224326877686422525674834453423723254336548627464115265458428536716682417265145642742716471173361154738237621154353285814553331651',
    '183124722183782123336626716567747212577673238111775824638428686576733146625747551545837531642863568612517423542164568843336513368766658646564284574253781244178864245286168255654646638243316161435225445361835787438626186468881422683528175588875284556275861477474242778113667644663474863615887137887137441156361811162166115883588111816775831787578786353663338165378363782265145286817438585111885423745118562148525835283651768146',
    '617541457148667116218631628238444682464128274716264328526758528428815487283711722773115332511443747613657776852518654185648224246233631261774318418782446542274221557353375378247643612388234714763177384441474524853476571376648311662731471633424426237685258233535124212626684464225131584341268288361341164411673852446253561287384735838525585321572852625212236747157573777672424542428131151867283127147321428888171775576137363155',
    '863563433833333385356314845855282547654341318774551327187677275277735123315234132285466888436827264822215237335756385634653373174634548868632317534858162668525854374835238614174736518472134348747834518461882733424884417432455621812662143638342885661443362576625878583242664186865483682711432427286623585314766175532188531771884276135686261828176154414475568483436345521542228655618357453673112462158382218311483185161157883632',
    '876446543462314255876155821531817744883664256537246578742578868713562666883537112723257185584663187726137758862536812427353843364458386182461658553176356347388642825551238344547764545434167527422864184138315152877845552328125228443173453658524845178184243155561776573885176477722727355764725426815865156634752573645175666522175615758222668838823116228388578621872235682536673368436748646156855673368277335224578713825444376754',
    '857516641844781558828238447263582556763266614345167566258512787886753852817375784766241415638267617253358274355331523155356237862572158821788522314551313131774462435156834774423356657312823487388676534887583415153286821145347332231857313857143846787512718776555336635877161275433728363515273776843772428283577216527814544728828475864535258486418738662548823457834355135617468478428443377621443826533371637681727358136471475782',
    '415822487784413225552833588338834442247486234233843884811444637581826477657363385885528851181447541521871513861486144335232245235767113512345453157742681185768648232638725566651366335344533874328556567235846271262414633641641173578265818263532561378447572227714343178824712617462442325446421236856444577264826244248436574511221411563453525633175173255142248173863518411675645185481412227263187383743675442283763542713423452137',
];


//console.log(Solve(args2));
*/

var args11=[
'11 597',
'588181138761784385357611715726656541162734836242226834634118265858476185822582263454827666258715814773151181561436286427436358486675333488887526788713165665853114134516613783648111342888584478475446413588347687737553575588615237154448173188277757154662537547728667676143653565845317634655358818374711318537258413344316642262686821536122456757625224873871577732674768613258734227425511282577224616662822373413356658474184215378875476285443873671246488726617625812252262687144175682441116274134874878383874782472172366247871374175227661438361518283123266154453767415828583513525431541785512337377384',
'131367185736788133774162257116656575575232478267314441483643143731517616424316836758466512714234622257883836157764248376144638775758688425834536155424356444533765255318634882365574181366753133581314732825536546155735348117848855454714826742537864548487326321535443548423868143356732457484666525388143514623265111578713346761642123336858631421762423462385563231343646443617128886255874447713456368333341353666232226852322521356557744447726562872332467826331345667355251853626135785624276265683362515675566222335728243741186263165716141615775343636845461312225651424133331821142154874811533763572463',
'222653111786232587817586266145654184678268486415681871227776864841131531215288512137438821331518217125844438675415834245112524238684241338664743352664221863586518347225521417366175327467347441364741376582666245718862161351586215183866731837747755174653763265264133756241682133765226117656864283676523827388342557361284253231812882383268386287115655564175448727654573545777572227368328774276881863141747315315666372656281586863716482352556765572644524523515148745554285634565761513253651326187514325557363263681671271632543361671268425785711125326747557467812877646611563187627423187382421881148654',
'761171455815213442576564382177714476323132261866666638228827515575365614358656733334134812582411855316871647752347441778565582812713748631165457832755811815582365332845676351455568325552374546424377827185515242651185336675427384212752318327828488166167247685655245136856861765283646443431231883638228247276884717858618562627331566278313758457243463457475632567365745613422453644158718752172318516638121862131558331842622216536428851384861257836517813715136562871377368157117131186367778247415236633588766555741611764447573545151673625815686165657186857181226673446635821426814338886744354165288572',
'877338173868258448152183334867472633653262735776431887143368778515125858627177651678412261511647711244223488563353525774783364813534546485683222116558137472832724584251641621641771132226248233781531136551275848323251468426482163371821113377167833264537768668348868867773711666713315188634866137461564578168734172586356761884217615238775153655723134171847786536742428415252553657675346315625144552643476632585456345531258833141157316525856431482183281215825615562752351868762485561271263471784552876567366827688752674814452842543263157512823717238234662682783828675545537673836266611587468344565346',
'178585183284335448547611717667133884846428731451141173525351825731581117753236875152827617767238576245538187727783364234153285435513727227231571553758186517212886487761228576264278453637278331716226277666463383653182874538455853366778646526727554121581665672817341745754641846688675434685453433383242725862687366325635852211512576266212311618447318837428821151574447266833168831128648788537188655434842323113523321225524675751758144577826248444752324642735275334487651846125688622322286325142223651733538138123312222781373453685153378117377162544434588657121754343666672641815571665845574373823816',
'777776848524754748737335744721477317146571517241668417516265246266668424725562361818641148886456328822431428164386448848737384542313383281545164455241884366565235574326633226537341435866727818214322384558131336863211374633845443641534671784188361748764766671314822426556383767276518835372712836124868678864468281656384721621341624116277165562477462813628643374888718588835433657514871455727444711124671872756588141627443277743347411714737166816511682548854688418244346545318414572571768776413346331814225755142866788623137521542612145416771478713234554826178551483886681575466851878343323731488157',
'138633822486246711132113527585382824358762776683718587575362586444254547173774552768547232358364663518183227524878336311882626256277352331768413243716157378284431843186128742311287611854668386837311345583167454722883572733868563436448571152832382342736255718832734284176147261385165366888235187778874835871243484666527611638378864815488567364562774853646587752245557251424258475382477323813282883141648873374782882615716218758734341211286732751586282848837343377861542217318454715857812825877826384427231888478275147125768611285586868413355231475413636471764286358634265112172445567846468117832466',
'273711645234782262241468212824112252836657153876881535664486745435866775724253616314255741848764314747663315425262616271858167528166733314865337262722675631186744124864533561722472245117356678661712162124342145682625212354322525555657878358675422416818645555282678473141734821435524747117727452844167248713541366314855386765134313174142485127351417426611473173653327715545422545523427884757661862773186183641866478112854241144556848687356667784746455244532532853152575585788733674526884556758461571837365541415154743714444824341477482874364866156542338256744614655824888526434618315361184465776347',
'637855217233261178121436352256332588132312742288381431431175172116522645668517246467557188344472614574376338835784826461557127864651246284836432172177836412886154648276217366368187731175186861556438572883253254342417537558326624843631153576416833688666214727243555621447366668258245213166887253775868544216333672315536473141152385366467616731686754657281215635651576166255326242478721534311251761685856873556546347883766327411731323534847274484828613141632587517326643573364128172783624783332286427688861867578373545868246114415141577227324162131776573757624812166716854775215288723837487837383778',
'644265122112342656783643574867312646757533824138688725733325143748517243181236425224147582575852266381158186264358777866163326367165275835372813884288872167616268844814244352145648247175424861376568133881621358676178626287248871613674846535854311172217713425848424522158273613153875313787837762123628517732564546848647226551476314668761465514832127442258242526674277155373188668571535251642377385412818117814137541437618787846376363774224555281178277247885616484775273257486872558227313617434637133346756762743616281612556553751267887127213534318664523634726847557128454832616633576475781112375527',];
console.log(Solve(args11));