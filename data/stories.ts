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
    solution: 'Adam bir çöp kamyonu şoförüydü. Kamyonun arkasındaki pres mekanizmasına sıkışan değerli bir pırlantayı almaya çalışırken mekanizma çalıştı ve adam hayatını kaybetti.',
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
    question: 'Bir adam çölde ölü bulunur. Tamamen çıplaktır ve elinde yanmış bir kibrit çöpü tutmaktadır. Ne oldu?',
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
    solution: 'Adamlar denizaltındadır, denizaltı su almaya başlamıştır. İçlerinden biri ortaya bir fikir atar, "Silahımda 1 kurşun var, satranç oynayalım, kazanan kendi kafasına sıksın." der. Diğeri de bu fikri kabul eder ve satranç oynarlar. Kazanan kendi kafasına sıkar ve diğeri ise su alan denizaltında boğularak ölür.',
    category: 'Strange',
    hints: ['Adamlar şu an nerede bulunuyor olabilirler?'],
    difficulty: 'hard',
  },
  {
    id: '8',
    title: 'Çok Geç',
    question: 'Bir kadın, koridorda koşar, sonra aniden durup ağlayarak yere çöker.',
    solution: 'Kadın bir avukattır. Ölüm cezasına çarptırılan müvekkili için af kararı çıkarır, koridorda koşarak kararı yetiştirmeye çalışırken ışıkların titrediğini görür. İnfazın o an gerçekleştiğini anlayan kadın her şey için çok geç olduğunun farkına varır ve çöküp ağlamaya başlar.',
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
    solution: 'Adam görme engelliydi ve İsviçre’de ameliyat olarak tekrar görmeye başladı. Sigara içilmeyen kompartımanda yer kalmadığı için sigara içilen kompartımandan bilet almak zorunda kaldı. Bu vagonda trenin iç ışıklandırması arızalıydı. Tren tünele girdiğinde etraf zifiri karanlık olunca adam tekrar görme yetisini kaybettiğini sandı, elindeki meyve bıçağını kendine saplayacaktı ki yanan sigaraların ışığı adama gerçeği gösterdi.',
    category: 'Strange',
    hints: ['Adamın görme yetisiyle ilgili yakın zamanda yaşadığı bir değişim var mı?'],
    difficulty: 'hard',
  },
  {
    id: '12',
    title: 'Martı',
    question: 'Bir adam restorana gider ve martı eti sipariş eder. Siparişi gelir ve adam bir lokma yediği gibi intihar ederek ölür.',
    solution: 'Adam ve eşi, daha evvel ıssız bir adaya düşen uçaktadır ve adam görme engellidir. Düşen uçaktan sadece adam ve pilot sağ çıkar. Adada kalan adam ve pilot yiyecek bulamayınca pilot, martı eti olarak tanıttığı eti adama yedirir. Et aslında ölen eşinin bir parçasıdır. Adadan kurtulduktan sonra adam gittiği bir restoranda martı eti sipariş eder ve eti yediğinde gerçeklerin farkına vararak intihar eder.',
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
    question: 'Bir adam, arabası ile otobanda seyahat eder. Sonra birden arabayı kenara çekerek intihar eder.',
    solution: 'Adam bir radyo sunucusudur. Eşini öldürmek istediğine karar verir. Mazeretini belirten ve önceden kaydedilmiş bir kaydı yayına koyar, hızla eve gider ve eşini öldürür. Dönüş yolunda radyoyu açar ve kaydın başlamadığını fark eder.',
    category: 'Crime',
    hints: ['Adamın mesleği nedir ve radyoyu açtığında ne duymayı bekliyordu?'],
    difficulty: 'medium',
  },
  {
    id: '15',
    title: '50 Yıl',
    question: 'Bir adam, trende seyahat ediyordur, karşısına bir kadın oturur. Kadın eldivenini çıkartır. Adam kadını vurur ama hiçbir ceza almaz. (50 yıl - gömü - bahçıvan.)\nNot: Parantez içerisindeki ipuçları da yarışmacılara verilmeli.',
    solution: 'Trende seyahat eden adam, eskiden çok zengindir. Adamın servetinde gözü olan eşi, evlerinin bahçıvanıyla birlikte adama kumpas kurar. Adamın eşi parmağını keserek iş birliği yaptığı bahçıvana verir ve ondan parmağını bahçenin bir yerine gömmesini, sonra da polise adam için "Eşini öldürüp buraya gömdü." diye ihbar etmesini ister. Olay yerine gelen polisler, adamı tutuklar ve 50 yıl hapis cezası verilir. 50 yıl sonra, adam trende parmağı olmayan eşini görür ve hiç düşünmeden eski eşini öldürür. Kadın kayıtlarda ölü gözüktüğü için adam ceza almaz.',
    category: 'Crime',
    hints: ['Adam geçmişte aslında hiç işlemediği bir suçtan dolayı hapis yatmış olabilir mi?'],
    difficulty: 'hard',
  }


];
