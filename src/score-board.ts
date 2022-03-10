export class ScoreKeeper {
    pointsA:number = 0;
    pointsB:number = 0;

    scoreTeamA1 = ():void => {
        this.pointsA += 1;
    }

    scoreTeamA2 = ():void => {
        this.pointsA += 2;
    }

    scoreTeamA3 = ():void => {
        this.pointsA += 3;
    }

    scoreTeamB1 = ():void => {
        this.pointsB += 1;
    }

    scoreTeamB2 = ():void => {
        this.pointsB += 2;
    }

    scoreTeamB3 = ():void => {
        this.pointsB += 3;
    }

    getScore = ():string => {
        return ("000" + this.pointsA).slice(-3) + ':' + ("000" + this.pointsB).slice(-3);
    }
}
