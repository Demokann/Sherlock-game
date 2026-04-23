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
];
