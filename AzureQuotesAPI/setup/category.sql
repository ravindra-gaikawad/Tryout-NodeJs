/*
CREATE DATABASE CategoryDb;
USE CategoryDb;
*/
DROP TABLE IF EXISTS Category
DROP PROCEDURE IF EXISTS createCategory
DROP PROCEDURE IF EXISTS updateCategory
GO

CREATE TABLE Category (
	Id int IDENTITY PRIMARY KEY,
	Title nvarchar(50) NOT NULL
)
GO

INSERT INTO Category (Title)
VALUES
('Motivational'),
('Inspirational'),
('Leadership')

GO

create procedure dbo.createCategory(@Category nvarchar(max))
as begin
	insert into Category
	select *
	from OPENJSON(@Category) 
			WITH (	Title nvarchar(50))
end
GO

create procedure updateCategory(@id int, @Category nvarchar(max))
as begin
	update Category
	set Title = json.Title
	from OPENJSON( @Category )
			WITH(   Title nvarchar(50)) AS json
	where id = @id
end
go

select * from Category for json path