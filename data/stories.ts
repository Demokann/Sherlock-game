export type Story = {
  id: string;
  title: string;
  question: string;
  solution: string;
  hints: string[];      // boş array olabilir
  difficulty: 'easy' | 'medium' | 'hard';  // ileride kullanılacak
  category: string;    // ileride filtreleme için
}

export const STORIES: Story[] = [
  {
    id: '1',
    title: 'Mücevher Zengini',
    question: 'Bir adam mücevher zengini olmuştur ama çöplerin içinde ölü bulunur. Neden?',
    solution: 'Adam kuyumcu soygunu yapmıştır. Üzerinde mücevherler ile yakalanmamak için mücevherleri çöpe atmıştır sonraki gün çöpü kontrole gelip içerisinde mücevherleri ararken çöp kamyonu adamla birlikte çöpleri öğütücüye attığından adam ölmüştür.',
    category: 'Crime',
    hints: ['Adamın mesleği ne olabilir?', 'Mücevherler nereden gelmiş olabilir?', 'Ölüm bir kaza mı yoksa cinayet mi?'],
    difficulty: 'medium',
  },
  {
    id: '2',
    title: 'Issız Ada',
    question: 'Bir adam ıssız bir adada ölü bulunur. Yanında sadece açılmamış bir paket vardır. Ölüm sebebi nedir?',
    solution: 'Adam uçaktan paraşütle atlamıştı ama paraşütü (paket) açılmadığı için yere çakılarak öldü.',
    category: 'Mystery',
    hints: ['Paketin içinde ne olabilir?', 'Adam adaya nasıl gelmiş olabilir?', 'Paket neden açılmadı?'],
    difficulty: 'easy',
  },
  {
    id: '3',
    title: 'Sıcak Hava',
    question: 'Bir adam çölde ölü bulunur. Tamamen çıplaktır ve elinde bir kibrit çöpü tutmaktadır. Ne oldu?',
    solution: 'Adam ve arkadaşları bir sıcak hava balonundaydılar. Balon irtifa kaybediyordu ve düşmek üzereydi. Önce eşyaları, sonra kıyafetlerini attılar. En son kimin atlayacağına karar vermek için kibrit çöpü çektiler. Kısa çöpü çeken adam balondan atlamak zorunda kaldı.',
    category: 'Strange',
    hints: ['Kibrit çöpü neden yanmış?', 'Neden çıplak?', 'Çölde kibritle ne yapmış olabilir?'],
    difficulty: 'hard',
  },
  {
    id: '4',
    title: 'Gezgin Müzisyen',
    question: 'Bir adam bir tarlada ölü bulunur. Yanında bir teyp çalmaktadır. Teypten "Seni seviyorum hayatım, hoşça kal" sesi duyulur. Polis bunun bir cinayet olduğunu anlar. Nasıl?',
    solution: 'Eğer adam intihar etmiş olsaydı, teybi geri sarıp "oynat" tuşuna basamazdı. Kayıt bittiğinde dururdu. Birinin kaydı geri sarmış olması gerekiyordu.',
    category: 'Crime',
    hints: ['Ses kaydı nasıl bitmiş?', 'Teyp teknolojisini düşün.', 'Katil nerede hata yaptı?'],
    difficulty: 'hard',
  },
  {
    id: '5',
    title: 'Beşinci Kat',
    question: 'Bir adam 20 katlı bir binanın 5. katında yaşıyor. Her sabah asansörle zemin kata inip işe gidiyor. Akşam döndüğünde asansörle 10. kata çıkıp kalan yolu yürüyor. Neden?',
    solution: 'Adamın boyu çok kısadır (cücedir). Asansörde sadece 10. kat düğmesine kadar yetişebiliyordur.',
    category: 'Strange',
    hints: ['Adamın fiziksel bir özelliği olabilir mi?', 'Neden 10. katta iniyor?', 'Sabahları neden 5. kattan aşağı inebiliyor?'],
    difficulty: 'medium',
  },
  {
    id: '6',
    title: 'Otel',
    question: 'Bir adam ve bir kadın oteldedir. Adam kadına bakar, göz kırpar ve kadın kısa bir süre sonra ölür.',
    solution: 'Adam ve kadın otelin birbirine bakan odalarında kalırlar. Adam kadını öldürmek için gönderilen bir tetikçidir. Dürbününden kadına bakar, gözünü kırparak nişan alır ve kadını vurur.',
    category: 'Crime',
    hints: ['Adamın mesleği ne olabilir?'],
    difficulty: 'medium',
  },
  {
    id: '7',
    title: 'Satranç Tahtası',
    question: 'Bir odada, iki tane ölü adam ve masanın üstünde duran satranç tahtası vardır.',
    solution: 'Adamlar denizaltındadır, denizaltı su almaya başlamıştır. Su basıncıyla ölmekten korktukları için içlerinden biri ortaya bir fikir atar, "Silahımda 1 kurşun var, satranç oynayalım, kazanan kendi kafasına sıksın." der. Diğeri de bu fikri kabul eder ve satranç oynarlar. Kazanan kendi kafasına sıkar ve diğeri ise su alan denizaltında boğularak ölür.',
    category: 'Strange',
    hints: ['Adamlar şu an nerede bulunuyor olabilirler?'],
    difficulty: 'hard',
  },
  {
    id: '8',
    title: 'Çok Geç',
    question: 'Bir kadın, koridorda koşar, sonra aniden durup ağlayarak yere çöker.',
    solution: 'Kadın bir avukattır. Ölüm cezasına çarptırılan müvekkili aklayacak bir bilgi ile, koridorda koşarak bilgiyi yetiştirmeye çalışırken ışıkların titrediğini görür. Bu elektrikli sandalyenin çalıştığı anlamına gelmektedir. İnfazın o an gerçekleştiğini anlayan kadın her şey için çok geç olduğunun farkına varır ve çöküp ağlamaya başlar.',
    category: 'Mystery',
    hints: ['Kadının mesleği nedir ve neyi yetiştirmeye çalışıyor?'],
    difficulty: 'medium',
  },
  {
    id: '9',
    title: 'Müzik',
    question: 'Bir müzik çalar. Müzik birden durduğunda kadın ölür.',
    solution: 'Kadın sirkte ip cambazıdır. Gözleri bağlı olarak müzik eşliğinde, ağ olmadan ipte yürür. Kadın ipin ucuna ulaştığında kondüktörün müziği durdurması, kadının platforma adım atmasının güvenli olduğunu anlamasını sağlar. O gün, her zamanki kondüktör şef hastadır. Yedek kondüktör müziği erken durdurur ve kadın ölür.',
    category: 'Strange',
    hints: ['Kadın nerede ve ne tür bir performans sergiliyor olabilir?'],
    difficulty: 'hard',
  },
  {
    id: '10',
    title: 'Elektrik',
    question: 'Bir kadın iş yerinde merdivenlerden inerken elektrikler kesilir. Ve kadın ağlamaya başlar.',
    solution: 'Kadın, hastanede çalışır ve acil durum jeneratörleri bozulur. Kocası bir trafik kazası geçirmiştir ve entübe durumdadır. Elektrik kesintisi olduğunda kocasının kendi kendine solunum yapamayacağını bilir ve öldüğünü anlar.',
    category: 'Mystery',
    hints: ['Kadının iş yeri neresi ve o sırada orada kim tedavi görüyor?'],
    difficulty: 'medium',
  },
  {
    id: '11',
    title: 'Sigara İçilmez',
    question: 'Adam sigara içilen yerde olsa ölmeyecekti neden?',
    solution: 'Hayatı boyunca görme engelli olan bir adam ameliyat olarak tekrar görmeye başladı. Daha sonra bir tren yolculuğu esnasında tren tünelden geçerken etrafın zifiri karanlık olmasıyla tekrardan kör olduğunu sandı ve kalp krizi geçirerek öldü. Eğer sigara içilen vagonda olsaydı, sigaranın ucundaki ateşi görüp tekrar kör olduğu yanılgısına düşmeyecekti.',
    category: 'Strange',
    hints: ['Adamın görme yetisiyle ilgili yakın zamanda yaşadığı bir değişim var mı?'],
    difficulty: 'hard',
  },
  {
    id: '12',
    title: 'Martı',
    question: 'Bir adam restorana gider ve martı eti sipariş eder. Siparişi gelir ve adam bir lokma yediği gibi intihar ederek ölür.',
    solution: 'Adam ve eşi, daha evvel  bir uçak kazası sonucu ıssız bir adaya düşmüştür. Adam bu kaza sonucu görme yetisini kaybetmiştir, eşi ise ölmüştür. Adada kurtarılmayı beklerken adadaki diğer insanlar açlıktan ölmemek için kaza sonucu ölenlerin etini yemiştir fakat görme engeli olan bu adama martı eti olduğunu söylemişlerdir. Yıllar sonra gerçek martı etinin tadını restoranda alan adam aslında eşinin etini yediğini anladığından kafasına sıkarak intihar eder.',
    category: 'Mystery',
    hints: ['Adam geçmişte ıssız bir adada gerçekten ne yemişti?'],
    difficulty: 'hard',
  },
  {
    id: '13',
    title: 'İçki İçen Adamlar',
    question: 'Bir bara giren iki adam aynı içkiyi isterler. İçkilerin tüm malzemeleri ve ölçüsü birebir aynıdır. İlk adam gelir gelmez hızla içkisini içer. Diğer adam içkisini yavaş yavaş içer. İçkisini yavaş içen adam ölür. İçkisini hemen içen adama hiçbir şey olmaz. Neden?',
    solution: 'İçkilerdeki buzlarda zehir vardır. Buzlar erimeden, hızla içen adama bir şey olmaz.',
    category: 'Crime',
    hints: ['Zehir, içkinin sıvı kısmında değil de zamanla eriyen bir şeyin içinde olabilir mi?'],
    difficulty: 'easy',
  },
  {
    id: '14',
    title: 'Sebep',
    question: 'Bir adam, arabası ile otobanda seyahat eder. Radyoda bir şey duyar ve birden arabayı kenara çekerek intihar eder.',
    solution: 'Adam bir radyo sunucusudur. Eşinin öldürüldüğü saatte kendini işte göstererek aklanmayı planlamaktadır. Fakat radyoda önceden kaydettiği programın çalmadığını banta koymayı unuttuğunu farkeder. Eşinin cinayetinden aklanamayacağını anlayınca aracı kenara çekip intihar eder.',
    category: 'Crime',
    hints: ['Adamın mesleği nedir ve radyoyu açtığında ne duymayı bekliyordu?'],
    difficulty: 'medium',
  },
  {
    id: '15',
    title: '50 Yıl',
    question: 'Bir adam, trende seyahat ediyordur, karşısına bir kadın oturur. Kadın eldivenini çıkartır. Adam kadını vurur ama hiçbir ceza almaz. (50 yıl - gömü - bahçıvan.)\nNot: Parantez içerisindeki ipuçları da yarışmacılara verilmeli.',
    solution: 'Trende seyahat eden adam, eskiden çok zengindir ve karşısında oturan kadınla evlidir. Fakat adamın eşi ve evlerinin bahçivanı gizli bir ilişki içindedir. Bahçivan ve kadın serveti kendilerine almanın bir yolunu aramaktadır. Kadın eşini öldürme fikrini sevmez bundan dolayı farklı bir fikir üretir. Kendi sahte ölümünü planlar suçu da kocasına yıkar kanıt olarakda parmağını kesip evlerinin bahçesine gömer. Bahçivan ise gömülü parmağı bulunca kocası cinayetten hapise girer. 50 yıl sonra hapisten çıkan adam karşısında eşine benzeyen ve parmağı eksik kadını görünce öldürür zaten ölü birini öldüremeyeceğinden ötürü ceza almaz.',
    category: 'Crime',
    hints: ['Adam geçmişte aslında hiç işlemediği bir suçtan dolayı hapis yatmış olabilir mi?'],
    difficulty: 'hard',
  }


];
