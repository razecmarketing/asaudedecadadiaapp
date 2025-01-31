export class ChallengeTracker {
    constructor() {
        this.currentDay = 1;
        this.totalDays = 30;
        this.challengeHistory = [];
    }

    startNewDay() {
        this.currentDay++;
        return this.currentDay;
    }

    resetChallenges() {
        this.currentDay = 1;
        this.challengeHistory = [];
    }

    trackDayProgress(challenges, completionStatus) {
        this.challengeHistory.push({
            day: this.currentDay,
            challenges: challenges,
            completionStatus: completionStatus
        });
    }

    hasCompletedAllChallenges(completionStatus) {
        return completionStatus.every(status => status === true);
    }

    isLastDay() {
        return this.currentDay === this.totalDays;
    }

    getChallengeHistory() {
        return this.challengeHistory;
    }

    getCurrentDay() {
        return this.currentDay;
    }
}