﻿using System;

namespace DatingApp.API.Models
{
    public class Photos
    {
        public int id { get; set; }
        public string  Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool isMain { get; set; }        
        public User User { get; set; }
        public int UserId { get; set; }
    }
}