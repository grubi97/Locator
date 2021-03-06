using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Readings;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReadingController
    {
        private readonly IMediator _mediator;

        public ReadingController(IMediator mediator)
        {
            _mediator = mediator;
        } 

        [HttpGet]
        public async Task<ActionResult<List<Reading>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpPost("{sensorid}")]
        

        public async Task<ActionResult<Unit>> Create(int sensorid, Create.Command command)
        {
            command.SensorId=sensorid;
            return await _mediator.Send(command);
        }

        

    }
}