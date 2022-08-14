class Weather {
  constructor(city){
    this.apiKey = 'f1a42cda53c30d423857467fb6674af9'
    this.city = city
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&lang=&appid=${this.apiKey}&units=metric`)

    const responseData = await response.json()

    return responseData
  }

  // Change weather location
  changeLocation(city) {
    this.city = city
  }
}