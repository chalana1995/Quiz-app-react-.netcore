﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using QuizAPI.Models;

#nullable disable

namespace QuizAPI.Migrations
{
    [DbContext(typeof(QuizDbContext))]
    partial class QuizDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("QuizAPI.Models.Participant", b =>
                {
                    b.Property<int>("PartcipantId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PartcipantId"), 1L, 1);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("Score")
                        .HasColumnType("int");

                    b.Property<int>("TimeTaken")
                        .HasColumnType("int");

                    b.HasKey("PartcipantId");

                    b.ToTable("Participant");
                });

            modelBuilder.Entity("QuizAPI.Models.Question", b =>
                {
                    b.Property<int>("QnId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("QnId"), 1L, 1);

                    b.Property<int>("Answer")
                        .HasColumnType("int");

                    b.Property<string>("ImageName")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Option1")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Option2")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Option3")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Option4")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("QnInWords")
                        .IsRequired()
                        .HasColumnType("nvarchar(250)");

                    b.HasKey("QnId");

                    b.ToTable("Questions");
                });
#pragma warning restore 612, 618
        }
    }
}
