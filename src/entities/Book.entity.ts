// - `@Entity("books")`: tabla books.
// - `@PrimaryGeneratedColumn()`: clave primaria autogenerada.
// - `@Column()`: columnas para nombre y género.
// - `@Column("int")`: columna numérica para año de publicación.
// - `@ManyToOne()`: relación muchos a uno con Writer.
// - `@JoinColumn()`: define la columna foránea authorId.

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from
    "typeorm";
import { Writer } from "./Writer.entity";
@Entity("books")
export class Book {
    @PrimaryGeneratedColumn() id!: number; // ID del libro
    @Column() nombre!: string; // Título del libro
    @Column() genero!: string; // Género literario
    @Column("int") añoPublicacion!: number; // Año de publicación
    @ManyToOne(() => Writer, writer => writer.books, { nullable: false })
    @JoinColumn({ name: "authorId" }) author!: Writer; // Relación con Writer
}