export class Housing {
    /*

    public imageURL: string;
    */
    //public url: string;
    public address: string;
    public work_distance: number;
    public work_duration: number;
    public school_distance: number;
    public school_duration: number;
    public rent: number;

    constructor(address: string, school_distance: number, school_duration: number,work_distance: number,
        work_duration: number,rent: number){

    //constructor(url: string, address: string, work_distance: number,
        //work_time: number, school_distance: number, school_time: number, rent: number){
        //this.url = url;
        this.address = address;
        this.work_distance = work_distance;
        this.work_duration = work_duration;
        this.school_distance = school_distance;
        this.school_duration = school_duration;
        this.rent = rent
    }

}
