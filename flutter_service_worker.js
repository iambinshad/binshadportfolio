'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e15de8f4cbc4d512c3372f7d5a6de2a4",
".git/config": "07c34e10e5789247a3f50f83a4d63e47",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8138764a1fbf0bddbbfc3f5d46bcb8fe",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "180cdb0be3f37f1cc891ed5aa6baaf7f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a9ed05db6b1c2ae0886ace4559daa878",
".git/logs/refs/heads/main": "7e434064cc90d20a53615ba0a04dc4b3",
".git/logs/refs/remotes/origin/main": "242febd5ae52f748f5e332e1c9c9971b",
".git/objects/03/34e6fc9f189266f47c41943688621190d8daba": "783828cf3deec90af3e21cbea2a17bd2",
".git/objects/05/a1caa7144c3acc705eaf19250261aacf33c302": "206e07eb24640301b3946e617a8f06ff",
".git/objects/09/162c6c618a13229a8ffa638e673894666f512a": "d4901a62b29b1c96e676873169a4d80a",
".git/objects/09/65ec1ede834c454dcfc0f1dddea6384da5731d": "e04a024e3aa59d334796ceb19d0460f5",
".git/objects/0c/4c573bc649a723e4f4f0577caf79ddba2b8164": "9cffc819afabf40598f21d41664b047d",
".git/objects/0e/857bc03c45200b7511bf07e4a44866884a0971": "9e44bcd5c6b77fa416ced2c9dcbd2590",
".git/objects/0e/a4d6aaebcd7c5c7f0ab4fca169d9a93913b3f9": "438f1d6ae2d1bb5c93926f1bdeae41f6",
".git/objects/0e/d371db530ee2ff6b7088ee72f63909ab7e9228": "c9cb5da5598fad895886c17e952ebcde",
".git/objects/0e/ed355cd5521237e82c105d90cb58903e75b62c": "463940a01ee17a35100d96383ce8695a",
".git/objects/0f/90eefb7544071de0a9766fb1da04b019dcc8ea": "843e8c509a8b45459d10bddb65481aa1",
".git/objects/0f/b82ae0c630cebeb54aff05b043afba8ecc4a8f": "5ad3d9da2f8ec78fc78a65fd5f387d2b",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/14/acdb66009e9ea4d5d3b649e371e3c8b95b688b": "6e4ca8feaf6733e116a114ecd30296f0",
".git/objects/15/f3f36682fdb38a923f65ecea596fa64040b35b": "ecc7258e467b14968a392b61071c18d5",
".git/objects/16/ea979939bcc123c731a1fd0de4afb4867640c3": "c2beaa37932e038d5907131c3f7732d1",
".git/objects/18/a9cef16a8547be679ef9a4de9098d706e0334a": "11b9205f833837108e934ce0bc7bddcf",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/867e30eb83f293d9c78e101b4279e6195f9553": "3a489f1c9f7bfe0f1084bbb7d80dd58c",
".git/objects/19/c0ba292468b119b33f50508db6326506d5f9c2": "a98254dcdd3b0e44614c9ba90db699c0",
".git/objects/1b/a8a555497a2e1def03df631797fa44e052240e": "a4d79528aeb9a06b469b335e6881928d",
".git/objects/1b/eab212f3b39a0a889e467cbc15523cdba36728": "0a53ac95f6c3f0c0a308b715951e4a8d",
".git/objects/1d/0389fd94ed42e2b61ae67af2b9a3e6c6e2f967": "bec879d0234d52cf6c1ed85f239e7dee",
".git/objects/1f/9c3e3ec0a3a2e4c01679d6e51915dc01620f3e": "1962db41584cdf1dfa26cfcb95f64717",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/0c2716260b7ce0798630d310d1ee75a2d341a8": "31647e9c56cd4bff4df48a1e999f3d25",
".git/objects/21/0c48096841ba3b6ba562a2f0a8160c1330f924": "885f7f23bf625f65ecb2c3703e29fa6c",
".git/objects/23/92846740a3615015d58a843b109d52b607c801": "3f481df342d8d7985b7956e098b58ac0",
".git/objects/23/a171194805223690106489619c043e29138def": "f30228c2076dcfac50c3d886d7f0d1fc",
".git/objects/25/c1ed98c5634f7e25a3649758f8adb1b796c451": "2c9e17879912d110255601e7519b3d37",
".git/objects/2a/d439e232e32a27a978e0c7eff5f8400f4e0b28": "451b6443b22480aa47e683950a146b4f",
".git/objects/2b/9620569e450243fc5f372c80a112a6a724171c": "8ce56a2d6c038f9357338a189614e972",
".git/objects/2c/6d3bbdd80759543ed40fe8297aa057963106d5": "c4811e5df1cd76119610b26a316976e2",
".git/objects/3b/fa137be0594e9bcff46095daa90f69fc6d26df": "2dc5393504e4416a723c277230f18a7d",
".git/objects/3d/67b1e12ebec3c0cbae3ad4fa7d77cf85db1111": "016f45413d4099853b7c006211e1416d",
".git/objects/3e/b04f2a24607b6b3d1e0f4dffe57109bdb88d92": "7437f206a679dc6b7abc6c97d7950de1",
".git/objects/41/355b558df1e7161c5258dc3a866a903890c4eb": "7e56756c8188c44df04d77c0abe635e1",
".git/objects/44/4dfb454bce476b80546cb1453fbfcf543716b7": "e35a67dafafd98bc52ef5b53ef78dca5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/798e7ee913582f5024c86802db5eaece28dd8b": "564169e9036f98e2c5aceb4f7001b18b",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/73c06770cbf108b96fea36490b924df39b1b61": "16f4fb280614e07dbd384a77c6af5ef4",
".git/objects/4d/ea66cd8c6f9dd9e54e08875e4dd35392051b1d": "ce69161265bb5588e0f6f44039213bff",
".git/objects/4e/c600db8bf21de5ce636b74fc5a3b76b6f7df82": "de1895e06a028b88127f487dc556f229",
".git/objects/51/571f9bb6c13ebc32990e12fdfb4f282b8306db": "b3b7090df502b89266c862549282bc76",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/b359ea48646706f90507c04c54bab360dbd572": "ea2144c78848ddb4a621381d378eaa3d",
".git/objects/65/b9a4bcd958783964950fb3c40bae3e05f29766": "26d3bd4252b5a7e0b31637547c5df45c",
".git/objects/67/57da736778002a9e105b59a3de3ba4c6038ff7": "6112d16e757ed90e518ec5e401b14650",
".git/objects/68/dff64b959986b454432763c5cbc4c2063f49e1": "5c814f03ad0edf3e5163b04db9d6a28a",
".git/objects/69/0dfb9654c124a7e2aec6260d39a57f7422b52e": "f70029ae036f63e6552688fca2a88dca",
".git/objects/6b/03cbb23d5b514ad201f92b860a8b85f7e95996": "30df119a2586a26541e1a8504651a4d2",
".git/objects/6b/4f131847836d537ad994f212e70d5a1d8a5cc7": "c968bac1aa6259c2da51dab4f5557333",
".git/objects/6e/8c72724060fea9293632594e4ef301c40046eb": "ac9327cdbad5a6e309fbd1d1e70f794e",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/04231e84dbdcc02ef8ffe6d6003f2341bc35d2": "baad3655ca137c7ddbbeee07f84f8fa2",
".git/objects/78/75cf20229f1bc3bb4e3dae8a5a2632e6472fc6": "99345da7f38257c6acc7aa04e4af94de",
".git/objects/78/78960ac3ff48cbcaa8e149910034ceec98fe5e": "495389d9655e785c5ec3f9a8605c1b93",
".git/objects/79/a0a6cf5c3906550fd657cb85eabd7552d11b96": "9ca015bec346bca793f8ba4b1b235253",
".git/objects/7a/22ef3c1b321aac2b3f92eb00e2846a1a983807": "58d76817f8611a65af32b7307300752f",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/80/08c68706b797dd014deecfa90ee638fb43b6af": "1b64ccbeae79f6f8bfb9d0fc7f46f232",
".git/objects/81/a9a32a2b310f3fb83901f36de67552f464c0a8": "097f045dd408d22c99d971cb784c9204",
".git/objects/82/4dd8516ea0155ae79119be9183af0021ebb4bc": "f4602383a064e9f3410880e0d54a0328",
".git/objects/87/2ba01493479e3ee8c40f974d0f159bacae181c": "3098bc86016771fe230b56529043d2d1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/b924b687ad1a1508093c5fbf34e69d66d44347": "1992cbeae72787527df01c8d656414ac",
".git/objects/91/54bb07303ee98bcd2168dc272dd9839beb778e": "f6c80866e25b535161037adb097905c1",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/99/3a623d2efd80536b4f76103590a333ac2e2ffc": "1548a7933b9a2c8e207bccd12cd0a211",
".git/objects/9b/851da1a4823c23360671038b19d7b28501bb1c": "f65f3a061f825c88b4f61f2082a69d24",
".git/objects/9d/59844fbbfc256dcc497fca99db7e2b9fd37572": "6f30a82cf2617924f03586a1178cf36f",
".git/objects/a0/397245863319e62021e076d052c4310fccbf6b": "9b8866bac91f62955166842507ed05f8",
".git/objects/a0/4d2fe50ac73d9200fff98031008c57b161bb2d": "6d92cebf1b48d3ee8bf7b1bb6fcbacf3",
".git/objects/a4/57ee8b4e91157c0efb4ffa4eae1f7ab533d828": "dadc998e91b9638b2e76cfb98856823f",
".git/objects/a7/8b50c7d3a99b705787b3e61c0ac6505665a697": "4719b2ff7375bd05bea3409019e29bed",
".git/objects/a8/491fed621b18f82613d7539d5eed2903719b88": "43ca9f753ca56e7bcf870ace1453113c",
".git/objects/aa/c8d9edbc84c25fabba5205bacb87c18fd9b2cd": "c60c78cafc268dc60d65f4bf16bb776a",
".git/objects/ab/9b544896869f07aaa2116801e0e6af43dae268": "c8c128e9b10f8b30aca4a0dcb7f562f2",
".git/objects/b3/155c035963b17d6818519bb96d5dab950bb076": "f65e962b8df5f4fcf9c39b08dfe3a4a4",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/46345a5b6954efb1671bbc62ff3dc66f7b614e": "f61a4039ce82bb0be493bc1f8768932a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/9baa73227b7c0ec6ee418f0bb9c59e1bcd0a4c": "1e4788b213b59ebbe1e95301fbd66cde",
".git/objects/bd/61bc278dd55ec48848fb453f1eb74a7a0c1dbf": "c56044a2dc2e0c9e1c38e435b8ba958c",
".git/objects/c0/b6c6b5116f67a04b519d4ff7fb22f220e12252": "5dfe74137709c98916d07bb2c8a9b8c3",
".git/objects/c5/26be801c6e70a0e07585d8bdb0b62fe6f29318": "f384d50271532094159d7bfc6a5f1243",
".git/objects/c5/fd542bb5d59b14c760a17c20088acbacfb4cdb": "8fb18526ba16364f5d263b82b6543894",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/d1f4fc2ed5653c18b9bbf4f6d5be62d532c56e": "b9c0f5420594a2f60d64f42ad0258966",
".git/objects/ca/e61919ec8bf198a4a6cba57e22ad016c7de3cd": "324e95919bf4f73ffb1bbe3eef9f5bdc",
".git/objects/ce/166fc044fc6cbb7ec01698d94f04f426a380a3": "c3b67cec7694dacbd57b171af8c94608",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/8f31247666da202a38fc21a337ce8db7887f09": "c05e7e13522e2e544d1468efe9431bdb",
".git/objects/e0/9cf72e3440aebedc875a1aeb8219caa646f64d": "4af3d074c82eea9d6dd2adf8998942cf",
".git/objects/e2/1040ecbe1786ac052c416d29b666a5348abdae": "5b4763e6bb2abc461372a6d014e0269e",
".git/objects/e5/d3daa84c4abd6f564f82e4cd64226e309be420": "317508ce381d340fec1d635c9b0fb943",
".git/objects/e6/39b7e29944d7b5ef3bccbb8dd3e4b77fefbf11": "90afb02289f7d581e37d68cf992af754",
".git/objects/e7/971240fcac6c12a8781a7577969d0b12442fd2": "91e6a0549d04db534d639cb41f024533",
".git/objects/e8/6f38dac9f255ef9b5a3d5ec98de8d17e9bb005": "a40dd46ed6a0de6b7bcdd93ae6d57078",
".git/objects/e9/f17bb4a32a6196e0232a4b60f04315897043a8": "e2b9e805c75e91ecd1f2a50af9473c54",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/a8721bab8589d9517b5223aeb4b088da219c68": "bda46584fe73b7f81f64553d0f707993",
".git/objects/f1/c8d67fdf12df759c3f8357f783891222c54db8": "c89f93b79f05d1e9afffd1085f7053cc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/0290b9744d68c8e9b62cdade2b948aecdc43af": "1fc9aa9b3518890ba54b662a78700642",
".git/objects/f3/8d12cc34838f0ae6b02d9cb50fd7a80fdecd81": "6ba0ec0be4dd9b127d1fd5ff7c870662",
".git/objects/f5/077087376dc0f4fd74405c23ea659842cc431e": "bc2825130f0d0a6684fffa928c33306b",
".git/objects/f5/ec0a250a2480650ac0bb9a7636f6bd4d0864dc": "7ace8f75e74274ccc144d1b8fe5fbba5",
".git/objects/f6/4746464cc68ba468c43dcd223105676173fc42": "c852f01873ef5145bb004d5900bfe4bc",
".git/objects/f8/50ec4eafa438fc56e646195744688bf6ebab2e": "568686043da2be38aaee15403e4ad614",
".git/objects/f9/d1d04e61421c7854ec82f700615c5cc347e06b": "3fd80cf41027d10f9a01287f7ec98ea8",
".git/objects/fa/4478ab1f67cfefa540cd169f5f2021a9464dbe": "dca2f1c231050a8392e7ce075ca6abde",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/ORIG_HEAD": "e7f70b5c1ef5a92b857cb41ebea55c2f",
".git/refs/heads/main": "9ab43b3bd9581d25a15a50e7435f537a",
".git/refs/remotes/origin/main": "9ab43b3bd9581d25a15a50e7435f537a",
"assets/AssetManifest.bin": "4dbd08bb212012c7fb979b47f2252500",
"assets/AssetManifest.bin.json": "345ad85c47d589a0203c1376ac789778",
"assets/AssetManifest.json": "8e89649e21dd54421addfbbbe2b20790",
"assets/assets/gif/arrow.gif": "a39d48c19f66d04d73e89f68f467c2bc",
"assets/assets/gif/three_l6vkay.gif": "e6b21d8aab1c36dcbe9e34f8cc42c192",
"assets/assets/icons/coding.png": "14c476de100acf0d94a7cc04a86734ae",
"assets/assets/icons/computer-keyboard.png": "df903924af820a260078d8a8ff72e5c6",
"assets/assets/icons/freelancer.png": "6c32568c9d0874ef8ce7ce8afaf37e3a",
"assets/assets/icons/game.png": "f0826aa23bac0f8c3ec9b59785cc1498",
"assets/assets/icons/github.png": "f3f1142923bf6f754ca2117db5e48976",
"assets/assets/icons/linkedin.png": "e20ab2aad9d3eee7c957f5030dc23a72",
"assets/assets/icons/mail.png": "305a49f8f0336c3466b29f985d66610a",
"assets/assets/icons/playstore.png": "9507a6993ff3ea6d52b96159054295f6",
"assets/assets/icons/social.png": "c73d05083cba1f74054505f85ad45205",
"assets/assets/icons/student.png": "670aa636d3ad00fa00585eaa3286fe5c",
"assets/assets/icons/ux-design.png": "27523cb0f420e371542c21c0c7d5f8ab",
"assets/assets/images/beatbox/Group%252021395.png": "759c2bc21c5828fd475761fbcf76b7e8",
"assets/assets/images/beatbox/Group%252021398.png": "92e869d9aff37b8dab778e704aac65c2",
"assets/assets/images/beatbox/Group%252021399.png": "942b8f1111a7a59e51a926def413e20b",
"assets/assets/images/beatbox/Group%252021400.png": "69e628af0a0c4c1d6d6bd2e08d794d7e",
"assets/assets/images/beatbox/Group%252021401.png": "42527f816c5b4a346838a3bfd94c335e",
"assets/assets/images/beatbox/Group%252021402.png": "3d1d49d6c44efa94f525e2a18bad2a08",
"assets/assets/images/britfort/01-removebg-preview.png": "6b5184a92dbd48f19975802127a9f4f7",
"assets/assets/images/britfort/02-removebg-preview.png": "27baffaced4647c66d9420db619847bb",
"assets/assets/images/britfort/03-removebg-preview.png": "9e744265729831484f9d03cba86d0513",
"assets/assets/images/britfort/04-removebg-preview.png": "e2156b6268ed31fd62ac5236ea2158e5",
"assets/assets/images/clinic/WhatsApp_Image_2024-09-06_at_3.06.36_PM-removebg-preview.png": "b834fa734bdfda71c768dacae55789f8",
"assets/assets/images/clinic/WhatsApp_Image_2024-09-06_at_3.06.36_PM__1_-removebg-preview.png": "5a21879302b959bce4c622658867d040",
"assets/assets/images/clinic/WhatsApp_Image_2024-09-06_at_3.06.36_PM__2_-removebg-preview.png": "7e6997033905c7b4a36cb38306b25e7c",
"assets/assets/images/cus/image%2520110.png": "e7017c4cc3dd7f72d52b2b70c0d9d2bf",
"assets/assets/images/cus/image%2520120.png": "9bd3f113a186c25b5f3f5df762cbed83",
"assets/assets/images/cus/image%2520121.png": "1aa1fa5a1f19ca32f36bcdf30db7c867",
"assets/assets/images/cus/image%2520122.png": "ec2884e8d24983d8a0a0787b57c627ce",
"assets/assets/images/cus/image%2520123.png": "1fbc870da1d1ea0b149995dabf8116b5",
"assets/assets/images/exe/image%2520129-1.png": "0563a53cbbf9016bcf10d2375cff1526",
"assets/assets/images/exe/image%2520129-2.png": "7f68b193aa37d827c87a20fa57918852",
"assets/assets/images/exe/image%2520129-3.png": "1707baf410063c3fa3f3723b235e3426",
"assets/assets/images/exe/image%2520129-4.png": "06c6f3a5400e838eecdff460b2897348",
"assets/assets/images/exe/image%2520129.png": "a14bde519bc635d72ece8c898b9c305d",
"assets/assets/images/partner/image%2520129-1.png": "94a644ef2ed9acf92ee3fccf1198bc37",
"assets/assets/images/partner/image%2520129-2.png": "3a0dd06789e4d76cfb048718eeb5e062",
"assets/assets/images/partner/image%2520129-3.png": "1934a6f4945625bc18063f1a304d8f9d",
"assets/assets/images/partner/image%2520129-4.png": "13e6b45ea66d12f8e175c1584f7d92fa",
"assets/assets/images/partner/image%2520129.png": "aa92bbe7f8ccd858431875efb5201123",
"assets/assets/images/RM%2520Partner%2520App%2520Icon.png": "36027a9f4bc8f4e75126c787731ffe4a",
"assets/assets/images/RoadMate%2520Icon.png": "287f4d286c321b5abecd61f044f3c6a8",
"assets/assets/images/smartico/auth%2520(1).png": "3ee53e02d5d93bff4dda1bb42e021ccb",
"assets/assets/images/smartico/detail.png": "d3d2b6ef764efb9af59ce1e3f73ef625",
"assets/assets/images/smartico/home%2520(1).png": "fe89665ee2165bfe1b7bd3c4f2fecc74",
"assets/assets/images/smartico/msg%2520(1).png": "5c41820bc20849fd3ba6bf9638f54cdd",
"assets/assets/images/smartico/orderstatus%2520(1).png": "d40f3a96751ec56ff93c9e7ade24311c",
"assets/assets/images/WhatsApp%2520Image%25202024-07-27%2520at%25204.17.46%2520PM.jpeg": "11298fa4b8c9acc1f84d5c7c5b5a6dfe",
"assets/assets/mp4/three_l6vkay%2520(1).mp4": "3425ba96d27f2a4f33e68923d3304120",
"assets/assets/mp4/three_l6vkay.mp4": "635460288c1d7d2474e1832f78c8bf32",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "c3a9aaed6b2bf33553f11a3c950fef8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c439a0861cb9092aeafeb9e6e63cd45b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "1333160e9cea83b8fa8f0865ada2e039",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a969415c9ab4622f0779e5fd26eb5485",
"/": "a969415c9ab4622f0779e5fd26eb5485",
"main.dart.js": "c926c51556aded093edb085a0c960683",
"manifest.json": "0bf07537db9336cbfefd839bdf08cf56",
"README.md": "e5ea8f6cd667dd4d2fe727ade8f00cad",
"version.json": "acf6d3dd6fa2fe759a44e1699d0ba0ee"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
