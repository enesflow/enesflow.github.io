var vue = new Vue({
    el: "#root",
    data: {
        message: "Hey!",
        write_something: "Lütfen birşey yazın!",
    },
    methods: {
        copy: function (text) {
            navigator.clipboard.writeText(text);
            document.getElementById("alert").style.display = "block";
        },
        translate: function (what) {
            const letters = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];
            var result = "";
            for (var i = 0; i < what.length; i++) {
                if (letters.includes(what[i].toLowerCase())) {
                    if (what[i].toLowerCase() === what[i]) {
                        result += what[i] + "g" + what[i];
                    } else if (what[i].toLowerCase() !== what[i]) {
                        result += what[i] + "G" + what[i];
                    }
                } else {
                    result += what[i];
                }
            }
            return result;
        },
    },
});
