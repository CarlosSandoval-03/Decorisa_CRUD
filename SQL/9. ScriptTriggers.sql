-- TRIGGERS

-- 1. Numero de ventas de un asesor
Drop trigger if exists Ventas_asesor;
DELIMITER $$
Create trigger Ventas_asesor Before insert on VENTA for each row
BEGIN
	Declare Ventas int Default 0;
	Set @asesor_documento = NEW.ase_Documento; 
    Select ase_ventasMes into Ventas from ASESOR where ase_Documento = @asesor_documento;
    Set Ventas = Ventas + 1;
    Update ASESOR Set ase_ventasMes = Ventas where ase_Documento = @asesor_documento;
END $$
DELIMITER ;
Insert into ASESOR Values ('20956265', 'Sandra Diaz', 3134217646, 0, 'Cr51 #134-14');
Insert into VENTA Values (4433, 4322245, 20956265, '2022/11/23', 4556673,100000);
Select * from ASESOR where ase_documento = 20956265;

-- 2. Numero de compras a un productor
Drop trigger if exists Compras_productor;
DELIMITER $$
Create trigger Compras_productor Before insert on PEDIDO for each row
BEGIN
	Declare Compras int Default 0;
	Set @NombreEmpresa = NEW.pro_nombreEmpresa; 
    Select pro_comprasMes into Compras from PRODUCTOR where pro_nombreEmpresa = @NombreEmpresa;
    Set Compras = Compras + 1;
    Update PRODUCTOR Set pro_comprasMes = Compras where pro_nombreEmpresa = @NombreEmpresa;
END $$
DELIMITER ;
Insert into PRODUCTOR Values ('Paramount', 3134562372, 'Mireya','Cortinas', '3');
Insert into PEDIDO Values (12345, 'Efectivo', '2022/11/23', '2022/11/27','Cr51 #134-14','Paramount',7432,130000);
Select * from PRODUCTOR where pro_nombreEmpresa = 'Paramount';
