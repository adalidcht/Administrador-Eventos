//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AdministradorEventosAPI.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    
    public partial class Evento
    {
        public int ID { get; set; }

        public string Titulo { get; set; }
        public string Descripcion { get; set; }
        public string Lugar { get; set; }
        public System.DateTime Fecha { get; set; }
        public Nullable<int> UsuarioID { get; set; }

        [JsonIgnore]
        public virtual Usuario Usuario { get; set; }
    }
}
