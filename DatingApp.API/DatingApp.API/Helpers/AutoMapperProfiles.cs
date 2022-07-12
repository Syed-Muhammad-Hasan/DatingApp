using AutoMapper;
using DatingApp.API.Dtos;
using DatingApp.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForDetailedDto>()
                .ForMember(src => src.PhotoUrl, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(p=>p.isMain).Url))
                .ForMember(src => src.Age, opt => opt.MapFrom(src => src.DateofBirth.CalculateAge()));
            CreateMap<User, UserForListDtos>()
                .ForMember(src => src.PhotoUrl, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.isMain).Url))
                 .ForMember(src => src.Age, opt => opt.MapFrom(src => src.DateofBirth.CalculateAge()));
            CreateMap<Photos, PhotosForDetailedDto>();
        }
    }
}
