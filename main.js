let score = 0;
        let max = 0;
        let total = 0;
        let multiplier = 0;
        let chances = 101;
        let txtMax = document.querySelector("#maxNum");
        let button = document.querySelector("#mainBtn");
        let totalTxt = document.querySelector("#total");

        txtMax.innerHTML = max;
        button.innerHTML = score;
        totalTxt.innerHTML = total;

        function press() {
            let roll = Math.ceil(Math.random() * chances);
            total++;
            totalTxt.innerHTML = total;
            if (roll <= 1+multiplier) {
                //Game Lose
                score = 0;
                max = 0;
                chances = 101;
                multiplier = 0;
                //Update the score
                button.innerHTML = score;
            } else {
                //Added Score
                score++;
                max++;
                multiplier++;
                //Change Text
                button.innerHTML = score;
                //Check if you had higher max score than before
                if (max >= Number(txtMax.innerHTML)) {
                    txtMax.innerHTML = max;
                } else {
                    //do nothing
                }
            }
        }
