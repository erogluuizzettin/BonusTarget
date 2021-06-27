export class User {
    public Id: number;
    public UserName: string; // varying(50) not null
    public FirstName: string; // varying(50) nullable
    public LastName: string; // varying(50) nullable
    public RoleId: number;
}
