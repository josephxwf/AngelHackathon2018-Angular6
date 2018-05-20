export class Housing {
    /*

    public imageURL: string;
    */
    public url: string;
    public work_distance: number;
    public work_time: number;
    public school_distance: number;
    public school_time: number;

    constructor(url: string, work_distance: number, work_time: number, school_distance: number, school_time: number){
        this.url = url;
        this.work_distance = work_distance;
        this.work_time = work_time;
        this.school_distance = school_distance;
        this.school_time = school_time;
    }

}
