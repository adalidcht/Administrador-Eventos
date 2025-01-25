using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AdministradorEventosAPI.Models;

namespace AdministradorEventosAPI.Controllers
{
    public class EventoesController : ApiController
    {
        private AdministradorEventodbEntities db = new AdministradorEventodbEntities();

        // GET: api/Eventoes
        public IQueryable<Evento> GetEvento()
        {
            return db.Evento;
        }

        // GET: api/Eventoes/5
        [ResponseType(typeof(Evento))]
        public IHttpActionResult GetEvento(int id)
        {
            Evento evento = db.Evento.Find(id);
            if (evento == null)
            {
                return NotFound();
            }

            return Ok(evento);
        }

        // GET: api/Eventoes/ByUsuario/2
        [HttpGet]
        [Route("api/Eventoes/ByUsuario/{usuarioId}")]
        [ResponseType(typeof(IQueryable<Evento>))]
        public IHttpActionResult GetEventosByUsuario(int usuarioId)
        {
            var eventos = db.Evento.Where(e => e.UsuarioID == usuarioId);
            if (!eventos.Any())
            {
                return NotFound();
            }

            return Ok(eventos);
        }

        // PUT: api/Eventoes/{id}
        [ResponseType(typeof(Evento))]
        public IHttpActionResult PutEvento(int id, Evento evento)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //Verificamos si el ID de la URL coincide con el ID del evento
            if (id != evento.ID)
            {
                return BadRequest("El ID del evento no coincide con el ID proporcionado en la URL.");
            }

            db.Entry(evento).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            // Regresar el evento modificado
            return Ok(evento);
        }





        // POST: api/Eventoes
        [ResponseType(typeof(Evento))]
        public IHttpActionResult PostEvento(Evento evento)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Evento.Add(evento);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = evento.ID }, evento);
        }

        // DELETE: api/Eventoes/5
        [ResponseType(typeof(Evento))]
        public IHttpActionResult DeleteEvento(int id)
        {
            Evento evento = db.Evento.Find(id);
            if (evento == null)
            {
                return NotFound();
            }

            db.Evento.Remove(evento);
            db.SaveChanges();

            return Ok(evento);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EventoExists(int id)
        {
            return db.Evento.Count(e => e.ID == id) > 0;
        }
    }
}