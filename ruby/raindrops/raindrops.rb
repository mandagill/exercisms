class Raindrops

  def self.convert(number)

    return_string = ''
    has_factor = false


    if number % 7 == 0
      has_factor = true
      return_string = 'Plong'
    end

    if number % 5 == 0
      has_factor = true
      return_string = 'Plang' + return_string
    end

    if number % 3 == 0
      has_factor = true
      return_string = 'Pling' + return_string
    end

    if has_factor == false
      number.to_s
    else
      return_string
    end
  end
end
