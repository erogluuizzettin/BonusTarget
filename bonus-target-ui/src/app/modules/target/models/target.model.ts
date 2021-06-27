export class Target {
    public Id: number;
    public SalesmanId: number;
    public ProductId: number;
    public Term?: number; // dönem
    public TargetAmount?: number; // numeric(10,2) // istenen/hedeflenen
    public TargetRealization?: number; // gerçekleşen //readonly
}
