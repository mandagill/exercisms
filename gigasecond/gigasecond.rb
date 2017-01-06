class Gigasecond

  # as a float
  GIGASECOND = 1000000000

  def self.from(timestamp)
    # presuming timestamp is the person's birthday
    return_date = timestamp.to_f + Gigasecond::GIGASECOND

    Time.at(return_date)

  end
end
