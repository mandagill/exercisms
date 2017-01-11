class Squares
# RED GREEN REFACTOR
	def initialize(num)
		@range = num
	end

	def square_of_sum
		iterator = @range
		total = 0
		while iterator > 0
			total += iterator
			iterator -= 1
		end
		total**2		
	end

	def sum_of_squares
		iterator = @range
		total = 0
		while iterator > 0
			total += iterator**2
			iterator -= 1
		end

		total
	end

	def difference
		square_of_sum - sum_of_squares
	end
end