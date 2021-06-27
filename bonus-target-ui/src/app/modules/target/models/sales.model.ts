export class Sales {
    public Id: number;
    public SalesmanId: number;
    public ProductId: number;
    public Term: number; // dönem (satış haziran ayında yapılmıştır)
    public Amount: number; // numeric(10,2) NOT NULL // toplam satış
    public GenerateDate?: Date;
    public UpdateDate?: Date;
    public GenerateUser?: number;
    public UpdateUser?: number;
} 
