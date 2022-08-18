using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuizAPI.Models
{
    public class Participant
    {
        [Key]
        public int PartcipantId { get; set; }

        [Column(TypeName ="nvarchar(50)")]
        public string Email { get; set; }

        [Column(TypeName = "nvarchar(50)")]

        public string Name { get; set; }

        public int Score { get; set; }

        public int TimeTaken { get; set; }
    }


    public class ParticipantResult
    {
        public int PartcipantId { get; set; }

        public int Score { get; set; }

        public int TimeTaken { get; set; }
    }
}
