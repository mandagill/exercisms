class Pangram

	def self.pangram?(phrase)
    puts phrase.match(/[a-z\ ]+/).inspect
    case phrase
    when /a-z+\s/
      true
    else
      puts "about to return false"
      false
    end
	end
end
