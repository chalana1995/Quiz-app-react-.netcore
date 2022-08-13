using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuizAPI.Models
{
    public class Question
    {
        [Key]
        public int QnId { get; set; }

        [Column(TypeName ="nvarchar(250)")]
        public string QnInWords { get; set; }

        [Column(TypeName ="nvarchar(50)")]
        public string?  ImageName { get; set; }

        [Column(TypeName ="nvarchar(50)")]
        public string Optiona1 { get; set; }

        [Column(TypeName ="nvarchar(50)")]
        public string Optiona2 { get; set; }

        [Column(TypeName ="nvarchar(50)")]
        public string Optiona3 { get; set; }

        [Column(TypeName ="nvarchar(50)")]
        public string Optiona4 { get; set; }

        public int Answer { get; set; }

    }
}
