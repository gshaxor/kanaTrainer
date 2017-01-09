// Hiragana
var hiragana = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん"];
var hiragana2 = ["が", "ぎ", "ぐ", "げ", "ご", "ざ", "じ", "ず", "ぜ", "ぞ", "だ", "ぢ", "づ", "で", "ど", "ば", "び", "ぶ", "べ", "ぼ", "ぱ", "ぴ", "ぷ", "ぺ", "ぽ"];
var hiragana3 = ["き", "ぎ", "し", "じ", "ち", "ぢ", "に", "ひ", "び", "ぴ", "み", "り"];
var hiragana3b = ["ゃ", "ゅ", "ょ"];

// Katakana
var katakana = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン"];
var katakana2 = ["ガ", "ギ", "グ", "ゲ", "ゴ", "ザ", "ジ", "ズ", "ゼ", "ゾ", "ダ", "ヂ", "ヅ", "デ", "ド", "バ", "ビ", "ブ", "ベ", "ボ", "パ", "ピ", "プ", "ペ", "ポ"];
var katakana3 = ["キ", "ギ", "シ", "ジ", "チ", "ヂ", "ニ", "ヒ", "ビ", "ピ", "ミ", "リ"];
var karakana3b = ["ャ", "ュ", "ョ"];

// Romaji
var romaji = ["a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so", "ta", "chi", "tsu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi", "fu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wo", "n"];
var romaji2 = ["ga", "gi", "gu", "ge", "go", "za", "ji", "zu", "ze", "zo", "da", "ji", "zu", "de", "do", "ba", "bi", "bu", "be", "bo", "pa", "pi", "pu", "pe", "po"];
var romaji3 = ["kya", "kyu", "kyo", "gya", "gyu", "gyo", "sha", "shu", "sho", "ja", "ju", "jo", "cha", "chu", "cho", "ja", "ju", "jo", "nya", "nyu", "nyo", "hya", "hyu", "hyo", "bya", "byu", "byo", "pya", "pyu", "pyo", "mya", "myu", "myo", "rya", "ryu", "ryo"]

app.controller('kanaTrainerController', function ($scope) {
    var vm = this;
    var kanas = [];
    var kanas2 = [];
    
    vm.kana = 0;
    vm.kanaItem = "";
    vm.KanaAnswer = "";
    
    vm.Hiragana = true;
    vm.Katakana = true;
    
    vm.Gojuon = true;
    vm.Dakuten = true;
//    vm.Yoon = true;
    
    vm.another = randomKana;
    
    activate();

    function activate() {
        randomKana();
    };
    
    function randomKana() {
        if(Math.floor(Math.random() * 10) > 5) {
            kanas = katakana;
            kanas2 = katakana2;
        } else {
            kanas = hiragana;
            kanas2 = hiragana2;
        };
        
        if(vm.Gojuon && vm.Dakuten) {
            vm.kana = Math.floor(Math.random() * (kanas.length + kanas2.length)) + 1;
        } else {
            vm.kana = Math.floor(Math.random() * kanas.length) + 1;    
        };
        
        if(vm.kana <= kanas.length) {
            vm.kanaItem = kanas[vm.kana-1];
            vm.kanaAnswer = romaji[vm.kana-1];
        } else if (vm.kana <= (kanas.length + kanas2.length)) {
            vm.kanaItem = kanas2[(vm.kana - kanas.length)-1];
            vm.kanaAnswer = romaji2[(vm.kana - kanas.length)-1];
        };
    };
    
});