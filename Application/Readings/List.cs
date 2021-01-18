using System.Collections.Generic;
using System.Threading;
using MediatR;
using Domain;
using System.Threading.Tasks;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Readings
{
     public class List
    {

        public class Query : IRequest<List<Reading>> { }

        public class Handler : IRequestHandler<Query, List<Reading>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<List<Reading>> Handle(Query request, CancellationToken cancellationToken)
            {

                var reading = await _context.Readings.ToListAsync();

                

                return reading;
            }
        }



    }
}