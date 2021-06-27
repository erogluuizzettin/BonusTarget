export class Salesman {
    public Id: number;
    public RegNum: string; // nullable varying(10) // sicil numarası (şirket bazında)
    public FirstName: string; // nullable varying(50) // required olacak
    public LastName: string; // nullable varying(50) // required olacak
    public ManagerId?: number;
    public RegionId?: number;
    public Wage?: number; // numeric(10,2) // maaşı
    public BonusRatio?: number; // numeric(3,3)
}
